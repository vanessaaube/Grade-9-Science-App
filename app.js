"use strict";

var elements = [
  { n: 1,  name: "Hydrogen",  symbol: "H" },
  { n: 2,  name: "Helium",    symbol: "He" },
  { n: 3,  name: "Lithium",   symbol: "Li" },
  { n: 4,  name: "Beryllium", symbol: "Be" },
  { n: 5,  name: "Boron",     symbol: "B" },
  { n: 6,  name: "Carbon",    symbol: "C" },
  { n: 7,  name: "Nitrogen",  symbol: "N" },
  { n: 8,  name: "Oxygen",    symbol: "O" },
  { n: 9,  name: "Fluorine",  symbol: "F" },
  { n: 10, name: "Neon",      symbol: "Ne" },
  { n: 11, name: "Sodium",    symbol: "Na" },
  { n: 12, name: "Magnesium", symbol: "Mg" },
  { n: 13, name: "Aluminum",  symbol: "Al" },
  { n: 14, name: "Silicon",   symbol: "Si" },
  { n: 15, name: "Phosphorus",symbol: "P" },
  { n: 16, name: "Sulfur",    symbol: "S" },
  { n: 17, name: "Chlorine",  symbol: "Cl" },
  { n: 18, name: "Argon",     symbol: "Ar" },
  { n: 19, name: "Potassium", symbol: "K" },
  { n: 20, name: "Calcium",   symbol: "Ca" },
  { n: 21, name: "Scandium",  symbol: "Sc" },
  { n: 22, name: "Titanium",  symbol: "Ti" },
  { n: 23, name: "Vanadium",  symbol: "V" },
  { n: 24, name: "Chromium",  symbol: "Cr" },
  { n: 25, name: "Manganese", symbol: "Mn" },
  { n: 26, name: "Iron",      symbol: "Fe" },
  { n: 27, name: "Cobalt",    symbol: "Co" },
  { n: 28, name: "Nickel",    symbol: "Ni" },
  { n: 29, name: "Copper",    symbol: "Cu" },
  { n: 30, name: "Zinc",      symbol: "Zn" }
];

var matterQuestions = [
  {
    text: "What does a physical property of a substance describe?",
    options: ["appearance and composition", "reactivity and stability", "colouration only", "size only"],
    answer: "appearance and composition",
    explanation: "A physical property describes characteristics that can be observed or measured without changing the substance into something new."
  },
  {
    text: "Which of the following is true of different substances in mechanical mixtures?",
    options: ["the substances are in different states", "the substances cannot be separated", "the substances look the same", "the substances are visible"],
    answer: "the substances are visible",
    explanation: "A mechanical mixture is heterogeneous, so its different substances can be seen as separate components."
  },
  {
    text: "In what kind of mixture are the different substances invisible because the mixture looks the same throughout?",
    options: ["Heterogeneous mixture", "Mechanical mixture", "Suspension", "Homogeneous mixture"],
    answer: "Homogeneous mixture",
    explanation: "A homogeneous mixture has a uniform appearance because its different substances are evenly mixed and not visibly distinct."
  },
  {
    text: "Sodium metal reacts vigorously with water. What is this an example of?",
    options: ["nuclear reaction", "chemical property", "physical property", "physical reaction"],
    answer: "chemical property",
    explanation: "Reactivity with water describes sodium's ability to undergo a chemical change, so it is a chemical property."
  },
  {
    text: "A heterogeneous mixture has:",
    options: ["at least two visible components", "a uniform distribution of a single phase", "at least two components that look like one substance", "only one component"],
    answer: "at least two visible components",
    explanation: "In a heterogeneous mixture, the composition is not uniform and at least two components can be distinguished."
  },
  {
    text: "Rust forming on an old car is a ______ reaction, while melting ice is a change in a ______ property.",
    options: ["mechanical; electrical", "physical; chemical", "chemical; physical", "physical; mechanical"],
    answer: "chemical; physical",
    explanation: "Rusting creates new substances and is chemical. Melting changes only the state of water and is physical."
  },
  {
    text: "Which observation is a physical property of copper?",
    options: ["It reacts with oxygen over time", "It conducts electricity", "It forms a green coating", "It reacts with nitric acid"],
    answer: "It conducts electricity",
    explanation: "Electrical conductivity can be measured without changing copper into a new substance, so it is a physical property."
  },
  {
    text: "Which choice describes a chemical property?",
    options: ["density", "melting point", "flammability", "colour"],
    answer: "flammability",
    explanation: "Flammability describes whether a substance can burn and form new substances, making it a chemical property."
  },
  {
    text: "Which event is a physical change?",
    options: ["wood burning", "iron rusting", "water freezing", "milk souring"],
    answer: "water freezing",
    explanation: "Freezing changes water's state but not its chemical identity."
  },
  {
    text: "Which event is a chemical change?",
    options: ["cutting paper", "dissolving sugar in water", "baking a cake", "crushing a can"],
    answer: "baking a cake",
    explanation: "Baking produces new substances through chemical reactions, so it is a chemical change."
  },
  {
    text: "Which is the best example of a homogeneous mixture?",
    options: ["salt water", "granite", "soil", "vegetable soup"],
    answer: "salt water",
    explanation: "Dissolved salt is distributed evenly through the water, creating a uniform homogeneous mixture."
  },
  {
    text: "Which is the best example of a mechanical mixture?",
    options: ["air", "clear vinegar", "trail mix", "salt water"],
    answer: "trail mix",
    explanation: "The different components of trail mix remain visible and can be separated mechanically."
  },
  {
    text: "Which statement best describes a solution?",
    options: ["It always contains a solid", "It is uniform throughout", "Its parts are easy to see", "It cannot contain water"],
    answer: "It is uniform throughout",
    explanation: "A solution is a homogeneous mixture with a uniform composition throughout."
  },
  {
    text: "In salt water, which substance is the solvent?",
    options: ["salt", "water", "sodium", "chlorine"],
    answer: "water",
    explanation: "The solvent is the substance that does the dissolving. In salt water, water dissolves the salt."
  },
  {
    text: "In a sugar-water solution, which substance is the solute?",
    options: ["sugar", "water", "the container", "both substances equally"],
    answer: "sugar",
    explanation: "The solute is the substance that is dissolved, so sugar is the solute."
  },
  {
    text: "A mixture contains sand suspended in water and settles when left alone. What type of mixture is it?",
    options: ["element", "solution", "suspension", "compound"],
    answer: "suspension",
    explanation: "A suspension contains visible particles that can settle out over time."
  },
  {
    text: "What is the best method for separating sand from water?",
    options: ["filtration", "melting", "magnetism", "freezing"],
    answer: "filtration",
    explanation: "A filter traps insoluble sand while allowing the water to pass through."
  },
  {
    text: "What is the best method for recovering dissolved salt from salt water?",
    options: ["using a magnet", "evaporating the water", "filtering the solution", "sieving the solution"],
    answer: "evaporating the water",
    explanation: "When the water evaporates, the dissolved salt remains behind."
  },
  {
    text: "Which method could separate iron filings from sand?",
    options: ["evaporation", "filtration", "magnetism", "distillation"],
    answer: "magnetism",
    explanation: "A magnet attracts the iron filings but not the sand."
  },
  {
    text: "Which is evidence that a chemical reaction may have occurred?",
    options: ["a solid is cut into pieces", "a substance changes state", "a gas forms unexpectedly", "an object changes shape"],
    answer: "a gas forms unexpectedly",
    explanation: "Unexpected gas production can indicate that new substances have formed in a chemical reaction."
  },
  {
    text: "A new solid appears when two clear liquids are mixed. What is the new solid called?",
    options: ["a solvent", "a precipitate", "a suspension", "an element"],
    answer: "a precipitate",
    explanation: "A precipitate is a solid that forms during a chemical reaction in a solution."
  },
  {
    text: "Which property can be measured without changing the identity of a substance?",
    options: ["reactivity with acid", "ability to rust", "density", "flammability"],
    answer: "density",
    explanation: "Density is a physical property because measuring it does not produce a new substance."
  },
  {
    text: "Why is boiling water considered a physical change?",
    options: ["A gas is always a new substance", "The water remains H₂O", "Heat causes a chemical reaction", "The water disappears permanently"],
    answer: "The water remains H₂O",
    explanation: "Boiling changes liquid water into water vapour, but both are still H₂O."
  },
  {
    text: "Which statement compares pure substances and mixtures correctly?",
    options: ["Only mixtures contain particles", "Pure substances have a fixed composition", "Mixtures cannot be separated", "Pure substances are always elements"],
    answer: "Pure substances have a fixed composition",
    explanation: "A pure substance has a fixed composition, while a mixture can contain substances in varying proportions."
  },
  {
    text: "Which sample is a pure substance rather than a mixture?",
    options: ["air", "distilled water", "soil", "lemonade"],
    answer: "distilled water",
    explanation: "Distilled water contains only H₂O, while the other choices contain multiple substances."
  },
  {
    text: "What happens to the particles when sugar dissolves in water?",
    options: ["They disappear from existence", "They turn into water particles", "They spread evenly among the water particles", "They settle immediately at the bottom"],
    answer: "They spread evenly among the water particles",
    explanation: "Dissolved sugar particles remain present and become evenly distributed through the water."
  },
  {
    text: "Which property would be most useful for identifying an unknown solid?",
    options: ["the size of the sample", "the shape of its container", "its melting point", "the day it was collected"],
    answer: "its melting point",
    explanation: "Melting point is a characteristic physical property that can help identify a substance."
  },
  {
    text: "Which change is reversible by a simple physical process?",
    options: ["burning gasoline", "rusting a nail", "dissolving salt in water", "cooking an egg"],
    answer: "dissolving salt in water",
    explanation: "The salt can be recovered by evaporating the water, so no new substance is required to reverse the change."
  },
  {
    text: "Oil and water form two visible layers. How should this mixture be classified?",
    options: ["homogeneous mixture", "pure substance", "heterogeneous mixture", "element"],
    answer: "heterogeneous mixture",
    explanation: "The visible layers show that the mixture is not uniform, so it is heterogeneous."
  },
  {
    text: "Which statement about compounds is correct?",
    options: ["Their elements are chemically combined", "Their parts are always visible", "They can be separated by filtering", "Their composition can vary"],
    answer: "Their elements are chemically combined",
    explanation: "A compound is a pure substance made of elements chemically joined in a fixed ratio."
  }
];

var typeLabels = {
  nameToSymbol: "Name → Symbol",
  symbolToName: "Symbol → Name",
  nameToNumber: "Element → Atomic Number",
  symbolToNumber: "Symbol → Atomic Number",
  numberToName: "Atomic Number → Element",
  numberToSymbol: "Atomic Number → Symbol",
  matterPractice: "Matter & Mixtures"
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

function makeNameToSymbol(element) {
  var distractors = sample(elements, 3, element.n, "n").map(function (item) { return item.symbol; });
  return {
    type: "nameToSymbol",
    target: element.n,
    text: "What is the chemical symbol for " + element.name + "?",
    hint: "Choose the correctly capitalized symbol.",
    options: buildOptions(element.symbol, distractors),
    answer: element.symbol,
    explanation: element.name + " is represented by the chemical symbol " + element.symbol + "."
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
    explanation: element.symbol + " is the chemical symbol for " + element.name + "."
  };
}

function atomicNumberDistractors(element) {
  return sample(elements, 3, element.n, "n").map(function (item) { return String(item.n); });
}

function makeNameToNumber(element) {
  return {
    type: "nameToNumber",
    target: element.n,
    text: "What is the atomic number of " + element.name + "?",
    hint: "Match the element name to its atomic number.",
    options: buildOptions(String(element.n), atomicNumberDistractors(element)),
    answer: String(element.n),
    explanation: element.name + " (" + element.symbol + ") has atomic number " + element.n + "."
  };
}

function makeSymbolToNumber(element) {
  return {
    type: "symbolToNumber",
    target: element.n,
    text: "What is the atomic number of the element with the symbol “" + element.symbol + "”?",
    hint: "Identify the element, then choose its atomic number.",
    options: buildOptions(String(element.n), atomicNumberDistractors(element)),
    answer: String(element.n),
    explanation: element.symbol + " represents " + element.name + ", which has atomic number " + element.n + "."
  };
}

function makeNumberToName(element) {
  var distractors = sample(elements, 3, element.n, "n").map(function (item) { return item.name; });
  return {
    type: "numberToName",
    target: element.n,
    text: "Which element has atomic number " + element.n + "?",
    hint: "Match the atomic number to the element name.",
    options: buildOptions(element.name, distractors),
    answer: element.name,
    explanation: "Atomic number " + element.n + " belongs to " + element.name + " (" + element.symbol + ")."
  };
}

function makeNumberToSymbol(element) {
  var distractors = sample(elements, 3, element.n, "n").map(function (item) { return item.symbol; });
  return {
    type: "numberToSymbol",
    target: element.n,
    text: "Which chemical symbol belongs to atomic number " + element.n + "?",
    hint: "Match the atomic number to the correctly capitalized symbol.",
    options: buildOptions(element.symbol, distractors),
    answer: element.symbol,
    explanation: "Atomic number " + element.n + " is " + element.name + ", with the symbol " + element.symbol + "."
  };
}

function makeMatterQuestion(question) {
  return {
    type: "matterPractice",
    target: "matter-" + matterQuestions.indexOf(question),
    text: question.text,
    hint: "Choose the best answer.",
    options: shuffle(question.options),
    answer: question.answer,
    explanation: question.explanation
  };
}

function generateRound() {
  var available = shuffle(elements);
  var questions = [];

  questions.push(makeNameToSymbol(available[0]));
  questions.push(makeSymbolToName(available[1]));
  questions.push(makeNameToNumber(available[2]));
  questions.push(makeSymbolToNumber(available[3]));
  questions.push(makeNumberToName(available[4]));
  questions.push(makeNumberToSymbol(available[5]));

  sample(matterQuestions, 4).forEach(function (question) {
    questions.push(makeMatterQuestion(question));
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
