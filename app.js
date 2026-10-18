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

var atomicStructureQuestions = [
  {
    text: "The number of protons in an element’s nucleus can be found using its:",
    options: ["chemical symbol", "atomic number", "mass number", "charge"],
    answer: "atomic number",
    explanation: "An element’s atomic number is equal to the number of protons in the nucleus."
  },
  {
    text: "As an analogy, Ernest Rutherford’s atomic model is often called the:",
    options: ["Raisin Bun Model", "Billiard Ball Model", "Quantum Model", "Planetary Model"],
    answer: "Planetary Model",
    explanation: "Rutherford’s model pictured electrons moving around a small, positively charged nucleus, similar to planets moving around the Sun."
  },
  {
    text: "Where is most of the mass of an atom located?",
    options: ["nucleus", "neutrons only", "electrons", "protons only"],
    answer: "nucleus",
    explanation: "The nucleus contains protons and neutrons, which account for nearly all of an atom’s mass."
  },
  {
    text: "Which particle did J.J. Thomson discover?",
    options: ["alpha particle", "electron", "proton", "atom"],
    answer: "electron",
    explanation: "J.J. Thomson’s cathode-ray experiments led to the discovery of the electron."
  },
  {
    text: "Who proposed that electrons orbit the nucleus in specific energy levels called shells or orbitals?",
    options: ["Niels Bohr", "John Dalton", "J.J. Thomson", "Ernest Rutherford"],
    answer: "Niels Bohr",
    explanation: "Niels Bohr proposed that electrons occupy specific energy levels around the nucleus."
  },
  {
    text: "Who first proposed a model of the atom with electrons moving around a positively charged nucleus?",
    options: ["Aristotle", "John Dalton", "J.J. Thomson", "Ernest Rutherford"],
    answer: "Ernest Rutherford",
    explanation: "Ernest Rutherford proposed the nuclear model after evidence showed that an atom has a small, positive nucleus."
  },
  {
    text: "As an analogy, the atomic model proposed by J.J. Thomson is often called the:",
    options: ["Quantum Model", "Raisin Bun Model", "Billiard Ball Model", "Planetary Model"],
    answer: "Raisin Bun Model",
    explanation: "Thomson pictured negative electrons embedded in a positively charged sphere, like raisins in a bun."
  },
  {
    text: "Which subatomic particle has a positive charge?",
    options: ["proton", "electron", "neutron", "atom"],
    answer: "proton",
    explanation: "A proton has a positive charge; an electron is negative and a neutron is neutral."
  },
  {
    text: "Which particle exists in set energy levels, or orbitals, around an atom’s nucleus?",
    options: ["proton", "electron", "neutron", "ion"],
    answer: "electron",
    explanation: "Electrons occupy energy levels around the nucleus."
  },
  {
    text: "How many protons and electrons are in a neutral helium atom?",
    options: ["1 proton and 1 electron", "2 protons and 2 electrons", "2 protons and 4 electrons", "4 protons and 2 electrons"],
    answer: "2 protons and 2 electrons",
    explanation: "Helium has two protons. A neutral atom has equal numbers of protons and electrons, so helium also has two electrons."
  },
  {
    text: "Helium has 2 protons and a mass number of 4. How many neutrons does it have?",
    options: ["1", "2", "4", "6"],
    answer: "2",
    explanation: "Neutrons equal mass number minus protons: 4 − 2 = 2."
  },
  {
    text: "A neutral magnesium-24 atom has an atomic number of 12. How many protons, electrons, and neutrons does it have?",
    options: ["12 protons, 12 electrons, 12 neutrons", "12 protons, 24 electrons, 12 neutrons", "24 protons, 12 electrons, 12 neutrons", "12 protons, 12 electrons, 24 neutrons"],
    answer: "12 protons, 12 electrons, 12 neutrons",
    explanation: "Atomic number 12 gives 12 protons, neutrality gives 12 electrons, and 24 − 12 gives 12 neutrons."
  },
  {
    text: "In what direction do periods run on the periodic table?",
    options: ["horizontally from left to right", "vertically from top to bottom", "diagonally from upper left", "in a circle around the centre"],
    answer: "horizontally from left to right",
    explanation: "Periods are the horizontal rows of the periodic table."
  },
  {
    text: "Francium and lithium are both in Group 1. To which family do they belong?",
    options: ["alkali metals", "alkaline earth metals", "halogens", "noble gases"],
    answer: "alkali metals",
    explanation: "Group 1 elements are called the alkali metals."
  },
  {
    text: "Which of these is an unreactive noble gas?",
    options: ["carbon dioxide", "oxygen", "neon", "hydrogen"],
    answer: "neon",
    explanation: "Neon is a Group 18 noble gas and is very unreactive."
  },
  {
    text: "Which element is located in Period 2 and Group 16?",
    options: ["oxygen", "sulfur", "fluorine", "nitrogen"],
    answer: "oxygen",
    explanation: "Oxygen is in the second row, Period 2, and in Group 16."
  },
  {
    text: "What does the staircase line on the periodic table separate?",
    options: ["metals from non-metals", "solids from liquids", "natural from synthetic elements", "atoms from ions"],
    answer: "metals from non-metals",
    explanation: "The staircase marks the broad boundary between metals and non-metals, with metalloids located along it."
  },
  {
    text: "Fluorine, chlorine, bromine, and iodine belong to which group?",
    options: ["Group 1 — alkali metals", "Group 2 — alkaline earth metals", "Group 17 — halogens", "Group 18 — noble gases"],
    answer: "Group 17 — halogens",
    explanation: "Fluorine, chlorine, bromine, and iodine are halogens in Group 17."
  },
  {
    text: "In a neutral atom, how does the number of electrons compare with the number of protons?",
    options: ["They are equal", "There are always twice as many electrons", "There is always one more proton", "They are unrelated"],
    answer: "They are equal",
    explanation: "Equal numbers of positive protons and negative electrons give an atom no overall charge."
  },
  {
    text: "Which subatomic particle has no electrical charge?",
    options: ["proton", "electron", "neutron", "ion"],
    answer: "neutron",
    explanation: "A neutron is electrically neutral."
  },
  {
    text: "Which particles are found together in the nucleus of an atom?",
    options: ["protons and neutrons", "protons and electrons", "electrons and neutrons", "electrons only"],
    answer: "protons and neutrons",
    explanation: "The nucleus is made of protons and neutrons; electrons occupy the space around it."
  },
  {
    text: "John Dalton’s atomic model is commonly compared with which object?",
    options: ["a billiard ball", "a raisin bun", "a solar system", "an electron cloud"],
    answer: "a billiard ball",
    explanation: "Dalton described atoms as tiny, solid spheres, leading to the Billiard Ball Model analogy."
  },
  {
    text: "Which experiment provided evidence for Rutherford’s small, dense nucleus?",
    options: ["the gold-foil experiment", "the oil-drop experiment", "a flame test", "paper chromatography"],
    answer: "the gold-foil experiment",
    explanation: "Unexpected deflections of alpha particles in the gold-foil experiment showed that positive charge and mass are concentrated in a tiny nucleus."
  },
  {
    text: "For the first 30 elements, what does an element’s period number tell you about its atoms?",
    options: ["the number of occupied electron shells", "the number of neutrons", "the exact atomic mass", "the element’s state of matter"],
    answer: "the number of occupied electron shells",
    explanation: "The period number corresponds to the number of occupied electron energy levels in these elements."
  },
  {
    text: "In what direction do groups run on the periodic table?",
    options: ["vertically from top to bottom", "horizontally from left to right", "diagonally from lower left", "in rings around the centre"],
    answer: "vertically from top to bottom",
    explanation: "Groups are the vertical columns of the periodic table."
  },
  {
    text: "Magnesium and calcium belong to which periodic-table family?",
    options: ["alkali metals", "alkaline earth metals", "halogens", "noble gases"],
    answer: "alkaline earth metals",
    explanation: "Magnesium and calcium are Group 2 elements, called the alkaline earth metals."
  },
  {
    text: "Which family contains highly reactive non-metals such as fluorine and chlorine?",
    options: ["halogens", "noble gases", "alkali metals", "transition metals"],
    answer: "halogens",
    explanation: "The halogens are reactive non-metals in Group 17."
  },
  {
    text: "Why are noble gases generally unreactive?",
    options: ["Their outer electron shell is full", "They have no nucleus", "They contain only neutrons", "Their electrons have no charge"],
    answer: "Their outer electron shell is full",
    explanation: "A full outer electron shell is stable, so noble gases have little tendency to react."
  },
  {
    text: "Where are most metals located relative to the staircase on the periodic table?",
    options: ["to the left of the staircase", "to the right of the staircase", "only along the staircase", "only in the top row"],
    answer: "to the left of the staircase",
    explanation: "Most metals are located on the left side and centre of the periodic table, to the left of the staircase."
  },
  {
    text: "Atoms of the same element that have different numbers of neutrons are called:",
    options: ["isotopes", "ions", "compounds", "mixtures"],
    answer: "isotopes",
    explanation: "Isotopes have the same number of protons but different numbers of neutrons."
  }
];

var typeLabels = {
  nameToSymbol: "Name → Symbol",
  symbolToName: "Symbol → Name",
  atomicStructure: "Atomic Structure & Periodic Table",
  matterPractice: "Matter & Mixtures"
};

var topicLabels = {
  mixed: "Grade 9 Science Review"
};

var screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen"),
  study: document.getElementById("study-screen")
};

var els = {
  startButton: document.getElementById("start-button"),
  studentName: document.getElementById("student-name"),
  startError: document.getElementById("start-error"),
  activeTopic: document.getElementById("active-topic"),
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
  saveStatus: document.getElementById("save-status"),
  playAgainButton: document.getElementById("play-again-button"),
  reviewButton: document.getElementById("review-button"),
  closeStudyButton: document.getElementById("close-study-button"),
  studyPlayButton: document.getElementById("study-play-button"),
  elementGrid: document.getElementById("element-grid")
};

var state = {
  questions: [],
  index: 0,
  score: 0,
  answered: false,
  studentName: "",
  topic: "mixed",
  incorrect: [],
  attemptSaved: false
};
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
    id: "name-to-symbol-" + element.n,
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
    id: "symbol-to-name-" + element.n,
    type: "symbolToName",
    target: element.n,
    text: "Which element is represented by “" + element.symbol + "”?",
    hint: "Match the symbol to its full element name.",
    options: buildOptions(element.name, distractors),
    answer: element.name,
    explanation: element.symbol + " is the chemical symbol for " + element.name + "."
  };
}

function makeMatterQuestion(question) {
  var questionIndex = matterQuestions.indexOf(question);
  return {
    id: "matter-" + (questionIndex + 1),
    type: "matterPractice",
    target: "matter-" + questionIndex,
    text: question.text,
    hint: "Choose the best answer.",
    options: shuffle(question.options),
    answer: question.answer,
    explanation: question.explanation
  };
}

function makeAtomicStructureQuestion(question) {
  var questionIndex = atomicStructureQuestions.indexOf(question);
  return {
    id: "atomic-structure-" + (questionIndex + 1),
    type: "atomicStructure",
    target: "atomic-structure-" + questionIndex,
    text: question.text,
    hint: "Choose the best answer.",
    options: shuffle(question.options),
    answer: question.answer,
    explanation: question.explanation
  };
}

function buildFullQuestionBank() {
  var questions = [];

  elements.forEach(function (element) {
    questions.push(makeNameToSymbol(element));
    questions.push(makeSymbolToName(element));
  });
  atomicStructureQuestions.forEach(function (question) {
    questions.push(makeAtomicStructureQuestion(question));
  });
  matterQuestions.forEach(function (question) {
    questions.push(makeMatterQuestion(question));
  });
  return questions;
}

function generateRound() {
  return sample(buildFullQuestionBank(), 10);
}

function showScreen(name) {
  Object.keys(screens).forEach(function (key) {
    screens[key].classList.toggle("active", key === name);
  });
  window.scrollTo(0, 0);
}

function startQuiz() {
  var studentName = els.studentName.value.trim().replace(/\s+/g, " ");
  if (!studentName) {
    els.startError.textContent = "Enter a first name or nickname.";
    els.studentName.focus();
    return;
  }
  if (studentName.length > 40) {
    els.startError.textContent = "Keep the first name or nickname to 40 characters or fewer.";
    els.studentName.focus();
    return;
  }
  if (!/^[\p{L}\p{M} .'’\-]+$/u.test(studentName)) {
    els.startError.textContent = "Use a first name or nickname only. Numbers and email addresses are not accepted.";
    els.studentName.focus();
    return;
  }

  els.startError.textContent = "";
  state.studentName = studentName;
  state.topic = "mixed";
  state.questions = generateRound();
  state.index = 0;
  state.score = 0;
  state.answered = false;
  state.incorrect = [];
  state.attemptSaved = false;
  els.score.textContent = "0";
  els.activeTopic.textContent = topicLabels[state.topic];
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
    state.incorrect.push({
      question_id: question.id,
      question_type: typeLabels[question.type],
      question_text: question.text,
      selected_answer: selectedAnswer,
      correct_answer: question.answer
    });
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

function trackingIsConfigured() {
  return window.QUIZ_CONFIG &&
    /^https:\/\/.+\.supabase\.co$/i.test(window.QUIZ_CONFIG.supabaseUrl || "") &&
    (window.QUIZ_CONFIG.supabaseAnonKey || "").length > 40;
}

function saveAttempt(percent) {
  if (state.attemptSaved) { return Promise.resolve(); }
  if (!trackingIsConfigured()) {
    els.saveStatus.className = "save-status warning";
    els.saveStatus.textContent = "Result shown, but tracking is not configured yet.";
    return Promise.resolve();
  }

  els.saveStatus.className = "save-status saving";
  els.saveStatus.textContent = "Saving this attempt…";
  var config = window.QUIZ_CONFIG;
  var payload = {
    student_name: state.studentName,
    quiz_topic: topicLabels[state.topic],
    topic_key: state.topic,
    score: state.score,
    total_questions: state.questions.length,
    percentage: percent,
    incorrect_questions: state.incorrect,
    app_version: "2.0"
  };

  return fetch(config.supabaseUrl + "/rest/v1/quiz_attempts", {
    method: "POST",
    headers: {
      "apikey": config.supabaseAnonKey,
      "Authorization": "Bearer " + config.supabaseAnonKey,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify(payload)
  }).then(function (response) {
    if (!response.ok) { throw new Error("Save failed with status " + response.status); }
    state.attemptSaved = true;
    els.saveStatus.className = "save-status saved";
    els.saveStatus.textContent = "Attempt saved for " + state.studentName + ".";
  }).catch(function () {
    els.saveStatus.className = "save-status warning";
    els.saveStatus.textContent = "Your score is shown, but this attempt could not be saved. Check the connection and tell your teacher.";
  });
}

function showResults() {
  var percent = Math.round(state.score / state.questions.length * 100);
  var heading;
  var message;

  if (state.score === 10) {
    heading = "Perfect score!";
    message = "Outstanding — you have a strong command of this topic.";
  } else if (state.score >= 8) {
    heading = "Excellent work!";
    message = "You know this material well. One more round could make your recall even faster.";
  } else if (state.score >= 6) {
    heading = "Good progress!";
    message = "You have a solid base. Review what tripped you up, then try again.";
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
  els.saveStatus.className = "save-status saving";
  els.saveStatus.textContent = "Preparing to save this attempt…";
  showScreen("result");
  saveAttempt(percent);
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

document.getElementById("start-form").addEventListener("submit", function (event) {
  event.preventDefault();
  startQuiz();
});
els.nextButton.addEventListener("click", nextQuestion);
els.playAgainButton.addEventListener("click", function () { showScreen("start"); });
els.reviewButton.addEventListener("click", function () { showScreen("study"); });
els.closeStudyButton.addEventListener("click", function () { showScreen("result"); });
els.studyPlayButton.addEventListener("click", function () { showScreen("start"); });

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
