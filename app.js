"use strict";

var elements = [
  { n: 1,  name: "Hydrogen",  symbol: "H",  clue: "I am the lightest element, I fuel stars, and I am part of every water molecule." },
  { n: 2,  name: "Helium",    symbol: "He", clue: "I am a non-reactive gas used in balloons, and my atomic number is 2." },
  { n: 3,  name: "Lithium",   symbol: "Li", clue: "I am a soft alkali metal used in many rechargeable batteries." },
  { n: 4,  name: "Beryllium", symbol: "Be", clue: "I am a light, strong metal found in the mineral beryl; my atomic number is 4." },
  { n: 5,  name: "Boron",     symbol: "B",  clue: "I am a metalloid used in heat-resistant glass and borax." },
  { n: 6,  name: "Carbon",    symbol: "C",  clue: "All known life contains me, and diamond and graphite are two of my forms." },
  { n: 7,  name: "Nitrogen",  symbol: "N",  clue: "I make up about 78% of Earth's atmosphere." },
  { n: 8,  name: "Oxygen",    symbol: "O",  clue: "Animals need me for cellular respiration, and I support combustion." },
  { n: 9,  name: "Fluorine",  symbol: "F",  clue: "I am a highly reactive halogen; my compounds are used in many toothpastes." },
  { n: 10, name: "Neon",      symbol: "Ne", clue: "I am a noble gas famous for the red-orange glow of advertising signs." },
  { n: 11, name: "Sodium",    symbol: "Na", clue: "I combine with chlorine in table salt and produce a bright yellow flame." },
  { n: 12, name: "Magnesium", symbol: "Mg", clue: "I burn with a brilliant white light and am found at the centre of chlorophyll." },
  { n: 13, name: "Aluminum",  symbol: "Al", clue: "I am a lightweight metal commonly used in cans, foil, and aircraft." },
  { n: 14, name: "Silicon",   symbol: "Si", clue: "I am a metalloid important in computer chips, glass, and many rocks." },
  { n: 15, name: "Phosphorus",symbol: "P",  clue: "I am part of DNA and bones, and my compounds are widely used in fertilizers." },
  { n: 16, name: "Sulfur",    symbol: "S",  clue: "I am a yellow non-metal; some of my compounds have a rotten-egg smell." },
  { n: 17, name: "Chlorine",  symbol: "Cl", clue: "I am a greenish halogen used to disinfect pools and drinking water." },
  { n: 18, name: "Argon",     symbol: "Ar", clue: "I am a non-reactive noble gas used in light bulbs and welding." },
  { n: 19, name: "Potassium", symbol: "K",  clue: "My symbol comes from the word kalium, and I am an important nutrient found in bananas." },
  { n: 20, name: "Calcium",   symbol: "Ca", clue: "I help build bones and teeth and am a major element in limestone." },
  { n: 21, name: "Scandium",  symbol: "Sc", clue: "I am the first transition metal in this list and have atomic number 21." },
  { n: 22, name: "Titanium",  symbol: "Ti", clue: "I am strong, light, and corrosion-resistant, so I am used in aircraft and implants." },
  { n: 23, name: "Vanadium",  symbol: "V",  clue: "I am a transition metal often added to steel to make strong alloys." },
  { n: 24, name: "Chromium",  symbol: "Cr", clue: "I give stainless steel corrosion resistance and make chrome plating shiny." },
  { n: 25, name: "Manganese", symbol: "Mn", clue: "I help strengthen steel and am used in many dry-cell batteries." },
  { n: 26, name: "Iron",      symbol: "Fe", clue: "I am used to make steel, I can rust, and I help blood carry oxygen." },
  { n: 27, name: "Cobalt",    symbol: "Co", clue: "I am used in strong magnets, blue pigments, and vitamin B12." },
  { n: 28, name: "Nickel",    symbol: "Ni", clue: "I am a corrosion-resistant metal used in stainless steel, coins, and batteries." },
  { n: 29, name: "Copper",    symbol: "Cu", clue: "I am a reddish metal that conducts electricity well and is used in wiring." },
  { n: 30, name: "Zinc",      symbol: "Zn", clue: "I protect steel from rust through galvanizing and combine with copper to make brass." }
];

var typeLabels = {
  nameToSymbol: "Name → Symbol",
  symbolToName: "Symbol → Name",
  symbolTrap: "Similar-symbol trap",
  incorrectPair: "Find the mismatch",
  mystery: "Mystery element"
};

var screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen"),
  study: document.getElementById("study-screen")
};

var els = {
  startButton: document.getElementById("start-button"),
  questionNumber: document.getElementById("question-number"),
  questionTotal: document.getElementById("question-total"),
  score: document.getElementById("score"),
  progress: document.querySelector(".progress-track"),
  progressFill: document.getElementById("progress-fill"),
  questionType: document.getElementById("question-type"),
  questionText: document.getElementById("question-text"),
  questionHint: document.getElementById("question-hint"),
  answerList: document.getElementById("answer-list"),
  feedback: document.getElementById("feedback"),
  feedbackIcon: document.getElementById("feedback-icon"),
  feedbackTitle: document.getElementById("feedback-title"),
  feedbackText: document.getElementById("feedback-text"),
  nextButton: document.getElementById("next-button"),
  resultHeading: document.getElementById("result-heading"),
  finalScore: document.getElementById("final-score"),
  resultMessage: document.getElementById("result-message"),
  correctCount: document.getElementById("correct-count"),
  incorrectCount: document.getElementById("incorrect-count"),
  percentScore: document.getElementById("percent-score"),
  playAgainButton: document.getElementById("play-again-button"),
  reviewButton: document.getElementById("review-button"),
  closeStudyButton: document.getElementById("close-study-button"),
  studyPlayButton: document.getElementById("study-play-button"),
  elementGrid: document.getElementById("element-grid")
};

var state = { questions: [], index: 0, score: 0, answered: false };
var letters = ["A", "B", "C", "D"];

function shuffle(items) {
  var copy = items.slice();
  for (var i = copy.length - 1; i > 0; i -= 1) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

function sample(items, count, excludedValue, key) {
  var pool = items.filter(function (item) {
    return key ? item[key] !== excludedValue : item !== excludedValue;
  });
  return shuffle(pool).slice(0, count);
}

function buildOptions(correct, distractors) {
  return shuffle([correct].concat(distractors.slice(0, 3)));
}

function nearbyElements(element) {
  var ranked = elements.slice().sort(function (a, b) {
    var aScore = symbolSimilarity(element.symbol, a.symbol) + Math.abs(element.n - a.n) / 20;
    var bScore = symbolSimilarity(element.symbol, b.symbol) + Math.abs(element.n - b.n) / 20;
    return aScore - bScore;
  });
  return ranked.filter(function (item) { return item.n !== element.n; }).slice(0, 8);
}

function symbolSimilarity(a, b) {
  var firstPenalty = a.charAt(0) === b.charAt(0) ? 0 : 2;
  var lengthPenalty = Math.abs(a.length - b.length);
  var secondPenalty = a.charAt(1) === b.charAt(1) ? 0 : 0.5;
  return firstPenalty + lengthPenalty + secondPenalty;
}

function makeNameToSymbol(element) {
  var distractors = sample(elements, 3, element.n, "n").map(function (item) { return item.symbol; });
  return {
    type: "nameToSymbol",
    target: element.n,
    text: "What is the chemical symbol for " + element.name + "?",
    hint: "Choose the correctly capitalized symbol.",
    options: buildOptions(element.symbol, distractors),
    answer: element.symbol,
    explanation: element.name + " has atomic number " + element.n + " and the symbol " + element.symbol + "."
  };
}

function makeSymbolToName(element) {
  var distractors = sample(elements, 3, element.n, "n").map(function (item) { return item.name; });
  return {
    type: "symbolToName",
    target: element.n,
    text: "Which element is represented by “" + element.symbol + "”?",
    hint: "Match the symbol to its full element name.",
    options: buildOptions(element.name, distractors),
    answer: element.name,
    explanation: element.symbol + " is the symbol for " + element.name + ", element " + element.n + "."
  };
}

function makeSymbolTrap(element) {
  var close = nearbyElements(element).slice(0, 3).map(function (item) { return item.symbol; });
  return {
    type: "symbolTrap",
    target: element.n,
    text: "Careful — which symbol belongs to " + element.name + "?",
    hint: "The choices include symbols that are easy to confuse.",
    options: buildOptions(element.symbol, close),
    answer: element.symbol,
    explanation: "The correct symbol for " + element.name + " is " + element.symbol + ". Capital letters matter."
  };
}

function makeIncorrectPair(element) {
  var correctOthers = sample(elements, 3, element.n, "n");
  var wrongSymbolChoices = sample(elements, 1, element.n, "n");
  var wrongPair = element.name + " — " + wrongSymbolChoices[0].symbol;
  var correctPairs = correctOthers.map(function (item) { return item.name + " — " + item.symbol; });
  return {
    type: "incorrectPair",
    target: element.n,
    text: "Which element–symbol pairing is incorrect?",
    hint: "Three pairings are correct. Select the one mismatch.",
    options: shuffle([wrongPair].concat(correctPairs)),
    answer: wrongPair,
    explanation: element.name + " should be paired with " + element.symbol + ", not " + wrongSymbolChoices[0].symbol + "."
  };
}

function makeMystery(element) {
  var distractors = sample(elements, 3, element.n, "n").map(function (item) { return item.name; });
  return {
    type: "mystery",
    target: element.n,
    text: "Mystery element: “" + element.clue + "”",
    hint: "Which element am I?",
    options: buildOptions(element.name, distractors),
    answer: element.name,
    explanation: "The mystery element is " + element.name + " (" + element.symbol + "), atomic number " + element.n + "."
  };
}

function generateRound() {
  var factories = [makeNameToSymbol, makeSymbolToName, makeSymbolTrap, makeIncorrectPair, makeMystery];
  var available = shuffle(elements);
  var questions = [];

  factories.forEach(function (factory, typeIndex) {
    for (var i = 0; i < 2; i += 1) {
      var element = available[typeIndex * 2 + i];
      questions.push(factory(element));
    }
  });

  return shuffle(questions);
}

function showScreen(name) {
  Object.keys(screens).forEach(function (key) {
    screens[key].classList.toggle("active", key === name);
  });
  window.scrollTo(0, 0);
}

function startQuiz() {
  state.questions = generateRound();
  state.index = 0;
  state.score = 0;
  state.answered = false;
  els.score.textContent = "0";
  els.questionTotal.textContent = String(state.questions.length);
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  var question = state.questions[state.index];
  state.answered = false;
  els.questionNumber.textContent = String(state.index + 1);
  els.progress.setAttribute("aria-valuenow", String(state.index + 1));
  els.progressFill.style.width = ((state.index + 1) / state.questions.length * 100) + "%";
  els.questionType.textContent = typeLabels[question.type];
  els.questionText.textContent = question.text;
  els.questionHint.textContent = question.hint;
  els.answerList.innerHTML = "";
  els.feedback.hidden = true;
  els.feedback.className = "feedback";
  els.nextButton.hidden = true;

  question.options.forEach(function (option, index) {
    var button = document.createElement("button");
    var letter = document.createElement("span");
    var copy = document.createElement("span");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.answer = option;
    letter.className = "answer-letter";
    letter.textContent = letters[index];
    copy.className = "answer-copy";
    copy.textContent = option;
    button.appendChild(letter);
    button.appendChild(copy);
    button.addEventListener("click", function () { selectAnswer(button, option); });
    els.answerList.appendChild(button);
  });

  var firstAnswer = els.answerList.querySelector("button");
  if (firstAnswer) { firstAnswer.focus({ preventScroll: true }); }
}

function selectAnswer(selectedButton, selectedAnswer) {
  if (state.answered) { return; }
  state.answered = true;
  var question = state.questions[state.index];
  var isCorrect = selectedAnswer === question.answer;
  var buttons = els.answerList.querySelectorAll("button");

  Array.prototype.forEach.call(buttons, function (button) {
    button.disabled = true;
    if (button.dataset.answer === question.answer) {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    } else {
      button.classList.add("dimmed");
    }
  });

  if (isCorrect) {
    state.score += 1;
    els.score.textContent = String(state.score);
    els.feedback.classList.add("is-correct");
    els.feedbackIcon.textContent = "✓";
    els.feedbackTitle.textContent = "Correct!";
  } else {
    els.feedback.classList.add("is-incorrect");
    els.feedbackIcon.textContent = "×";
    els.feedbackTitle.textContent = "Not quite";
  }

  els.feedbackText.textContent = question.explanation;
  els.feedback.hidden = false;
  els.nextButton.hidden = false;
  els.nextButton.innerHTML = state.index === state.questions.length - 1 ? "See My Score <span aria-hidden=\"true\">→</span>" : "Next Question <span aria-hidden=\"true\">→</span>";
  els.nextButton.focus({ preventScroll: true });
}

function nextQuestion() {
  if (!state.answered) { return; }
  if (state.index < state.questions.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  var percent = Math.round(state.score / state.questions.length * 100);
  var heading;
  var message;

  if (state.score === 10) {
    heading = "Perfect score!";
    message = "Outstanding — you have a strong command of the first 30 elements.";
  } else if (state.score >= 8) {
    heading = "Excellent work!";
    message = "You know these elements well. One more round could make your recall even faster.";
  } else if (state.score >= 6) {
    heading = "Good progress!";
    message = "You have a solid base. Review the symbols that tripped you up, then try again.";
  } else {
    heading = "Keep building!";
    message = "Every round strengthens your recall. Use the quick reference, then take another shot.";
  }

  els.resultHeading.textContent = heading;
  els.finalScore.textContent = String(state.score);
  els.resultMessage.textContent = message;
  els.correctCount.textContent = String(state.score);
  els.incorrectCount.textContent = String(state.questions.length - state.score);
  els.percentScore.textContent = percent + "%";
  showScreen("result");
  els.playAgainButton.focus({ preventScroll: true });
}

function buildElementGrid() {
  var fragment = document.createDocumentFragment();
  elements.forEach(function (element) {
    var tile = document.createElement("div");
    tile.className = "element-tile";
    tile.setAttribute("aria-label", element.n + ", " + element.name + ", " + element.symbol);
    tile.innerHTML = "<span class=\"element-number\">" + element.n + "</span>" +
      "<span class=\"element-symbol\">" + element.symbol + "</span>" +
      "<span class=\"element-name\">" + element.name + "</span>";
    fragment.appendChild(tile);
  });
  els.elementGrid.appendChild(fragment);
}

els.startButton.addEventListener("click", startQuiz);
els.nextButton.addEventListener("click", nextQuestion);
els.playAgainButton.addEventListener("click", startQuiz);
els.reviewButton.addEventListener("click", function () { showScreen("study"); });
els.closeStudyButton.addEventListener("click", function () { showScreen("result"); });
els.studyPlayButton.addEventListener("click", startQuiz);

document.addEventListener("keydown", function (event) {
  if (!screens.quiz.classList.contains("active")) { return; }
  if (!state.answered && event.key >= "1" && event.key <= "4") {
    var answer = els.answerList.querySelectorAll("button")[Number(event.key) - 1];
    if (answer) { answer.click(); }
  } else if (state.answered && (event.key === "Enter" || event.key === " ")) {
    if (document.activeElement !== els.nextButton) {
      event.preventDefault();
      nextQuestion();
    }
  }
});

buildElementGrid();
