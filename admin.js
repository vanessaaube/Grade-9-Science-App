"use strict";

var config = window.QUIZ_CONFIG || {};
var attempts = [];
var filteredAttempts = [];
var sessionKey = "elementQuestAdminSession";
var timeZone = "America/Edmonton";

var els = {
  configPanel: document.getElementById("config-panel"),
  loginPanel: document.getElementById("login-panel"),
  loginForm: document.getElementById("login-form"),
  email: document.getElementById("admin-email"),
  password: document.getElementById("admin-password"),
  loginButton: document.getElementById("login-button"),
  loginError: document.getElementById("login-error"),
  dashboard: document.getElementById("dashboard"),
  dashboardError: document.getElementById("dashboard-error"),
  lastUpdated: document.getElementById("last-updated"),
  refreshButton: document.getElementById("refresh-button"),
  exportButton: document.getElementById("export-button"),
  logoutButton: document.getElementById("logout-button"),
  studentFilter: document.getElementById("student-filter"),
  topicFilter: document.getElementById("topic-filter"),
  dateFilter: document.getElementById("date-filter"),
  clearFilters: document.getElementById("clear-filters"),
  metricAttempts: document.getElementById("metric-attempts"),
  metricAverage: document.getElementById("metric-average"),
  metricLatest: document.getElementById("metric-latest"),
  metricLatestDate: document.getElementById("metric-latest-date"),
  metricStudents: document.getElementById("metric-students"),
  summaryBody: document.getElementById("summary-body"),
  summaryEmpty: document.getElementById("summary-empty"),
  missedBody: document.getElementById("missed-body"),
  missedEmpty: document.getElementById("missed-empty"),
  historyBody: document.getElementById("history-body"),
  historyEmpty: document.getElementById("history-empty"),
  historyCount: document.getElementById("history-count")
};

function isConfigured() {
  return /^https:\/\/.+\.supabase\.co$/i.test(config.supabaseUrl || "") &&
    (config.supabaseAnonKey || "").length > 40;
}

function getSession() {
  try { return JSON.parse(sessionStorage.getItem(sessionKey) || "null"); }
  catch (error) { return null; }
}

function setSession(session) {
  if (session) { sessionStorage.setItem(sessionKey, JSON.stringify(session)); }
  else { sessionStorage.removeItem(sessionKey); }
}

function authRequest(path, options) {
  options = options || {};
  options.headers = Object.assign({
    "apikey": config.supabaseAnonKey,
    "Content-Type": "application/json"
  }, options.headers || {});
  return fetch(config.supabaseUrl + path, options);
}

function signIn(email, password) {
  return authRequest("/auth/v1/token?grant_type=password", {
    method: "POST",
    body: JSON.stringify({ email: email, password: password })
  }).then(function (response) {
    return response.json().then(function (body) {
      if (!response.ok) { throw new Error(body.error_description || body.msg || "Sign-in failed."); }
      setSession(body);
      return body;
    });
  });
}

function refreshSession(session) {
  if (!session || !session.refresh_token) { return Promise.reject(new Error("No session")); }
  return authRequest("/auth/v1/token?grant_type=refresh_token", {
    method: "POST",
    body: JSON.stringify({ refresh_token: session.refresh_token })
  }).then(function (response) {
    if (!response.ok) { throw new Error("Session expired"); }
    return response.json();
  }).then(function (body) {
    setSession(body);
    return body;
  });
}

function showLogin() {
  els.loginPanel.hidden = false;
  els.dashboard.hidden = true;
  els.password.value = "";
}

function showDashboard() {
  els.loginPanel.hidden = true;
  els.dashboard.hidden = false;
}

function apiHeaders(token) {
  return { "apikey": config.supabaseAnonKey, "Authorization": "Bearer " + token };
}

function fetchAttemptPage(token, offset) {
  var query = "/rest/v1/quiz_attempts?select=id,created_at,student_name,quiz_topic,topic_key,score,total_questions,percentage,incorrect_questions&order=created_at.desc&limit=1000&offset=" + offset;
  return fetch(config.supabaseUrl + query, { headers: apiHeaders(token) }).then(function (response) {
    if (response.status === 401) { var error = new Error("Unauthorized"); error.status = 401; throw error; }
    if (!response.ok) { throw new Error("Could not load results (" + response.status + ")."); }
    return response.json();
  });
}

function fetchAllAttempts(session) {
  var all = [];
  function next(offset) {
    return fetchAttemptPage(session.access_token, offset).then(function (page) {
      all = all.concat(page);
      return page.length === 1000 ? next(offset + 1000) : all;
    });
  }
  return next(0);
}

function loadAttempts(allowRefresh) {
  var session = getSession();
  if (!session) { showLogin(); return Promise.resolve(); }
  els.dashboardError.textContent = "";
  els.refreshButton.disabled = true;
  return fetchAllAttempts(session).catch(function (error) {
    if (error.status === 401 && allowRefresh !== false) {
      return refreshSession(session).then(function (newSession) { return fetchAllAttempts(newSession); });
    }
    throw error;
  }).then(function (rows) {
    attempts = rows;
    showDashboard();
    populateFilters();
    applyFilters();
    els.lastUpdated.textContent = "Updated " + formatDateTime(new Date().toISOString());
  }).catch(function (error) {
    if (error.message === "Session expired" || error.status === 401) {
      setSession(null);
      showLogin();
      els.loginError.textContent = "Your session expired. Sign in again.";
    } else {
      showDashboard();
      els.dashboardError.textContent = error.message || "Could not load results.";
    }
  }).finally(function () { els.refreshButton.disabled = false; });
}

function populateFilters() {
  var selectedStudent = els.studentFilter.value;
  var selectedTopic = els.topicFilter.value;
  var students = Array.from(new Set(attempts.map(function (a) { return a.student_name; }))).sort(function (a, b) { return a.localeCompare(b); });
  var topics = Array.from(new Set(attempts.map(function (a) { return a.quiz_topic; }))).sort(function (a, b) { return a.localeCompare(b); });
  replaceOptions(els.studentFilter, "All students", students, selectedStudent);
  replaceOptions(els.topicFilter, "All topics", topics, selectedTopic);
}

function replaceOptions(select, allLabel, values, selected) {
  select.innerHTML = "";
  var all = document.createElement("option");
  all.value = "";
  all.textContent = allLabel;
  select.appendChild(all);
  values.forEach(function (value) {
    var option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
  if (values.indexOf(selected) !== -1) { select.value = selected; }
}

function dateKey(iso) {
  var parts = new Intl.DateTimeFormat("en-CA", { timeZone: timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date(iso));
  var values = {};
  parts.forEach(function (part) { values[part.type] = part.value; });
  return values.year + "-" + values.month + "-" + values.day;
}

function formatDateTime(iso) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: timeZone, year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit"
  }).format(new Date(iso));
}

function applyFilters() {
  var student = els.studentFilter.value;
  var topic = els.topicFilter.value;
  var fromDate = els.dateFilter.value;
  filteredAttempts = attempts.filter(function (attempt) {
    return (!student || attempt.student_name === student) &&
      (!topic || attempt.quiz_topic === topic) &&
      (!fromDate || dateKey(attempt.created_at) >= fromDate);
  });
  renderMetrics();
  renderSummary();
  renderMissed();
  renderHistory();
}

function renderMetrics() {
  var count = filteredAttempts.length;
  var average = count ? Math.round(filteredAttempts.reduce(function (sum, a) { return sum + Number(a.percentage); }, 0) / count) : null;
  var latest = count ? filteredAttempts.slice().sort(function (a, b) { return new Date(b.created_at) - new Date(a.created_at); })[0] : null;
  els.metricAttempts.textContent = String(count);
  els.metricAverage.textContent = average === null ? "—" : average + "%";
  els.metricLatest.textContent = latest ? latest.score + "/" + latest.total_questions + " (" + latest.percentage + "%)" : "—";
  els.metricLatestDate.textContent = latest ? formatDateTime(latest.created_at) : "";
  els.metricStudents.textContent = String(new Set(filteredAttempts.map(function (a) { return a.student_name.toLocaleLowerCase(); })).size);
}

function addCell(row, text) {
  var cell = document.createElement("td");
  cell.textContent = text;
  row.appendChild(cell);
  return cell;
}

function renderSummary() {
  var groups = {};
  filteredAttempts.forEach(function (attempt) {
    var key = attempt.student_name.toLocaleLowerCase() + "\u0000" + attempt.quiz_topic;
    if (!groups[key]) { groups[key] = []; }
    groups[key].push(attempt);
  });
  var rows = Object.keys(groups).map(function (key) {
    var group = groups[key].slice().sort(function (a, b) { return new Date(b.created_at) - new Date(a.created_at); });
    var avg = Math.round(group.reduce(function (sum, a) { return sum + Number(a.percentage); }, 0) / group.length);
    return { student: group[0].student_name, topic: group[0].quiz_topic, attempts: group.length, average: avg, latest: group[0] };
  }).sort(function (a, b) { return a.student.localeCompare(b.student) || a.topic.localeCompare(b.topic); });

  els.summaryBody.innerHTML = "";
  rows.forEach(function (item) {
    var row = document.createElement("tr");
    addCell(row, item.student);
    addCell(row, item.topic);
    addCell(row, String(item.attempts));
    addCell(row, item.average + "%");
    addCell(row, item.latest.score + "/" + item.latest.total_questions + " (" + item.latest.percentage + "%)");
    addCell(row, formatDateTime(item.latest.created_at));
    els.summaryBody.appendChild(row);
  });
  els.summaryEmpty.hidden = rows.length !== 0;
}

function renderMissed() {
  var missed = {};
  filteredAttempts.forEach(function (attempt) {
    (Array.isArray(attempt.incorrect_questions) ? attempt.incorrect_questions : []).forEach(function (item) {
      var key = item.question_id || item.question_text;
      if (!missed[key]) {
        missed[key] = { text: item.question_text || "Question unavailable", type: item.question_type || "", answer: item.correct_answer || "", count: 0 };
      }
      missed[key].count += 1;
    });
  });
  var rows = Object.keys(missed).map(function (key) { return missed[key]; }).sort(function (a, b) { return b.count - a.count || a.text.localeCompare(b.text); });
  els.missedBody.innerHTML = "";
  rows.forEach(function (item) {
    var row = document.createElement("tr");
    addCell(row, item.text);
    addCell(row, item.type);
    addCell(row, String(item.count));
    addCell(row, item.answer);
    els.missedBody.appendChild(row);
  });
  els.missedEmpty.hidden = rows.length !== 0;
}

function renderHistory() {
  var rows = filteredAttempts.slice().sort(function (a, b) { return new Date(b.created_at) - new Date(a.created_at); });
  els.historyBody.innerHTML = "";
  rows.forEach(function (attempt) {
    var row = document.createElement("tr");
    addCell(row, formatDateTime(attempt.created_at));
    addCell(row, attempt.student_name);
    addCell(row, attempt.quiz_topic);
    var scoreCell = addCell(row, attempt.score + "/" + attempt.total_questions);
    scoreCell.className = "score-chip";
    addCell(row, attempt.percentage + "%");
    var incorrectCell = document.createElement("td");
    var incorrect = Array.isArray(attempt.incorrect_questions) ? attempt.incorrect_questions : [];
    if (!incorrect.length) {
      incorrectCell.textContent = "None";
    } else {
      var list = document.createElement("ul");
      list.className = "incorrect-list";
      incorrect.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item.question_text + " — chose “" + item.selected_answer + "”; answer: “" + item.correct_answer + "”";
        list.appendChild(li);
      });
      incorrectCell.appendChild(list);
    }
    row.appendChild(incorrectCell);
    els.historyBody.appendChild(row);
  });
  els.historyCount.textContent = rows.length + (rows.length === 1 ? " attempt" : " attempts");
  els.historyEmpty.hidden = rows.length !== 0;
}

function csvValue(value) {
  var text = String(value == null ? "" : value);
  if (/^[=+\-@]/.test(text)) { text = "'" + text; }
  return '"' + text.replace(/"/g, '""') + '"';
}

function exportCsv() {
  var headers = ["Date and time (Calgary)", "First name or nickname", "Topic", "Score", "Total", "Percentage", "Incorrect questions"];
  var lines = [headers.map(csvValue).join(",")];
  filteredAttempts.forEach(function (attempt) {
    var incorrect = (attempt.incorrect_questions || []).map(function (item) {
      return item.question_text + " | selected: " + item.selected_answer + " | correct: " + item.correct_answer;
    }).join("; ");
    lines.push([formatDateTime(attempt.created_at), attempt.student_name, attempt.quiz_topic, attempt.score, attempt.total_questions, attempt.percentage, incorrect].map(csvValue).join(","));
  });
  var blob = new Blob(["\ufeff" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.href = url;
  link.download = "element-quest-results-" + dateKey(new Date().toISOString()) + ".csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

els.loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  els.loginError.textContent = "";
  els.loginButton.disabled = true;
  els.loginButton.textContent = "Signing in…";
  signIn(els.email.value.trim(), els.password.value).then(function () {
    els.password.value = "";
    return loadAttempts();
  }).catch(function (error) {
    els.loginError.textContent = error.message || "Sign-in failed.";
  }).finally(function () {
    els.loginButton.disabled = false;
    els.loginButton.textContent = "Sign In";
  });
});

els.logoutButton.addEventListener("click", function () {
  var session = getSession();
  if (session) {
    authRequest("/auth/v1/logout", { method: "POST", headers: { "Authorization": "Bearer " + session.access_token } }).catch(function () {});
  }
  setSession(null);
  attempts = [];
  showLogin();
});
els.refreshButton.addEventListener("click", function () { loadAttempts(); });
els.exportButton.addEventListener("click", exportCsv);
els.studentFilter.addEventListener("change", applyFilters);
els.topicFilter.addEventListener("change", applyFilters);
els.dateFilter.addEventListener("change", applyFilters);
els.clearFilters.addEventListener("click", function () {
  els.studentFilter.value = "";
  els.topicFilter.value = "";
  els.dateFilter.value = "";
  applyFilters();
});

if (!isConfigured()) {
  els.configPanel.hidden = false;
  els.loginPanel.hidden = true;
} else if (getSession()) {
  loadAttempts();
} else {
  showLogin();
}
