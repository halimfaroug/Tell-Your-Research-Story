let points = 0;
let currentMove = 0;

const moves = [
  {
    title: "Move 1: Establishing a Territory",
    purpose: "To show that the research area is important, relevant, and established.",
    strategies: [
      "Claiming centrality",
      "Making topic generalizations",
      "Reviewing previous research"
    ],
    signals: [
      "Recent studies have shown...",
      "There has been growing interest in...",
      "X has been widely investigated"
    ],
    errors: [
      "Starting too narrowly",
      "Using personal opinion",
      "Listing facts without synthesis"
    ],
    goodExample:
      "In recent years, increasing attention has been paid to academic discourse practices in second language contexts.",
    badExample:
      "I am interested in academic writing and want to talk about it.",
    task: {
      question: "What is the main function of the effective sentence?",
      options: [
        { text: "Establishing importance of the field", correct: true },
        { text: "Stating personal motivation", correct: false },
        { text: "Describing methodology", correct: false }
      ]
    },
    sandbox:
      "Write ONE sentence that establishes the importance of a research area using general reference (no 'I')."
  },

  {
    title: "Move 2: Establishing a Niche",
    purpose: "To indicate a gap, limitation, or problem in previous research.",
    strategies: [
      "Indicating a gap",
      "Questioning previous findings",
      "Extending prior research"
    ],
    signals: [
      "However, little attention has been given to...",
      "Previous studies have not addressed...",
      "Despite extensive research..."
    ],
    errors: [
      "Being aggressive",
      "Inventing gaps",
      "Criticizing without evidence"
    ],
    goodExample:
      "However, little research has examined how novice researchers construct rhetorical moves in introductions.",
    badExample:
      "No one has studied this before.",
    task: {
      question: "What rhetorical action is being performed?",
      options: [
        { text: "Indicating a research gap", correct: true },
        { text: "Summarizing results", correct: false },
        { text: "Presenting conclusions", correct: false }
      ]
    },
    sandbox:
      "Write ONE sentence that indicates a research gap without exaggeration."
  },

  {
    title: "Move 3: Occupying the Niche",
    purpose: "To state the purpose, scope, or structure of the present research.",
    strategies: [
      "Outlining purpose",
      "Describing methodology",
      "Announcing structure"
    ],
    signals: [
      "This study aims to...",
      "The present paper investigates...",
      "This article is organized as follows..."
    ],
    errors: [
      "Repeating the gap",
      "Overloading one sentence",
      "Vague objectives"
    ],
    goodExample:
      "This study aims to analyze how graduate students deploy rhetorical moves in research article introductions.",
    badExample:
      "This paper is about many things.",
    task: {
      question: "Which element is essential in Move 3?",
      options: [
        { text: "Clear statement of purpose", correct: true },
        { text: "Literature review", correct: false },
        { text: "Personal reflection", correct: false }
      ]
    },
    sandbox:
      "Write ONE sentence clearly stating the aim of a study."
  }
];

function loadMove(index) {
  currentMove = index;
  const m = moves[index];

  document.getElementById("moveTitle").innerText = m.title;
  document.getElementById("movePurpose").innerText = m.purpose;

  fillList("moveStrategies", m.strategies);
  fillList("moveSignals", m.signals);
  fillList("moveErrors", m.errors);

  document.getElementById("goodExample").innerText = m.goodExample;
  document.getElementById("badExample").innerText = m.badExample;

  document.getElementById("taskQuestion").innerText = m.task.question;
  renderOptions(m.task.options);

  document.getElementById("sandboxPrompt").innerText = m.sandbox;
  document.getElementById("sandboxFeedback").innerText = "";
}

function fillList(id, items) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach(i => {
    const li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
  });
}

function renderOptions(options) {
  const div = document.getElementById("taskOptions");
  div.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => checkAnswer(opt.correct);
    div.appendChild(btn);
  });
}

function checkAnswer(correct) {
  const feedback = document.getElementById("taskFeedback");
  if (correct) {
    feedback.innerText = "Correct. This aligns with Swales’ rhetorical purpose.";
    points += 10;
  } else {
    feedback.innerText = "Incorrect. Reconsider the rhetorical function.";
  }
  updateStatus();
}

function checkSandbox() {
  const text = document.getElementById("studentText").value.trim();
  const fb = document.getElementById("sandboxFeedback");

  if (text.length < 20) {
    fb.innerText = "Too short. Academic moves require development.";
    return;
  }

  fb.innerText =
    "Self-check: Does your sentence match the stated purpose and avoid personal reference?";
  points += 5;
  updateStatus();
}

function updateStatus() {
  document.getElementById("points").innerText = "Points: " + points;
  const percent = Math.round(((currentMove + 1) / moves.length) * 100);
  document.getElementById("progress").innerText = "Progress: " + percent + "%";
}

loadMove(0);
