let points = 0;
let currentMove = 0;

const diagnostics = {
  text: `Recent studies have examined academic writing in higher education. 
However, many students write poorly. 
This paper discusses writing problems.`,
  question: "What is the MAIN rhetorical problem in this introduction?",
  options: [
    { text: "The research area is unclear", correct: false },
    { text: "No research gap is established", correct: true },
    { text: "The language is too simple", correct: false }
  ],
  explanation:
    "The problem is rhetorical, not linguistic. The text fails to create a niche by indicating a specific gap or limitation."
};

const moves = [
  {
    title: "Move 1: Establishing a Territory",
    purpose:
      "To convince readers that the research area is important, relevant, and established.",
    strategies: [
      "Claiming centrality",
      "Topic generalization",
      "Selective literature reference"
    ],
    signals: [
      "There has been increasing interest in...",
      "X has been widely studied",
      "Recent research has focused on..."
    ],
    errors: [
      "Personal motivation",
      "Listing facts without synthesis",
      "Over-narrow focus"
    ],
    goodExample:
      "Over the past decade, academic discourse practices have received increasing attention in applied linguistics research.",
    badExample:
      "I am interested in academic writing and want to study it.",
    decision: {
      question:
        "Which reader expectation does Move 1 primarily address?",
      options: [
        { text: "Why should I read this?", correct: true },
        { text: "How was the data collected?", correct: false },
        { text: "What were the results?", correct: false }
      ],
      rationale:
        "Move 1 positions the study within a recognized and meaningful research territory."
    },
    sandbox:
      "Write ONE sentence that establishes a research area as significant to the field (no 'I', no study aim)."
  },

  {
    title: "Move 2: Establishing a Niche",
    purpose:
      "To show that there is a problem, gap, or limitation in existing research that needs addressing.",
    strategies: [
      "Indicating a gap",
      "Questioning assumptions",
      "Extending prior work"
    ],
    signals: [
      "However, little attention has been paid to...",
      "Previous studies have not examined...",
      "Despite extensive research..."
    ],
    errors: [
      "Inventing gaps",
      "Overly aggressive critique",
      "Vague dissatisfaction"
    ],
    goodExample:
      "However, few studies have explored how novice researchers learn to construct rhetorical moves explicitly.",
    badExample:
      "No one has studied this topic before.",
    decision: {
      question:
        "Why must Move 2 be logically dependent on Move 1?",
      options: [
        { text: "Because gaps only matter in established fields", correct: true },
        { text: "Because it improves grammar", correct: false },
        { text: "Because journals require it", correct: false }
      ],
      rationale:
        "A niche only exists if a research territory has already been established as meaningful."
    },
    sandbox:
      "Write ONE sentence indicating a limitation in existing research without exaggeration."
  },

  {
    title: "Move 3: Occupying the Niche",
    purpose:
      "To state how the present study responds to the identified niche.",
    strategies: [
      "Stating research purpose",
      "Describing scope",
      "Outlining structure"
    ],
    signals: [
      "This study aims to...",
      "The present research investigates...",
      "This paper is organized as follows..."
    ],
    errors: [
      "Repeating the gap",
      "Overloading one sentence",
      "Unclear objectives"
    ],
    goodExample:
      "This study aims to examine how explicit instruction influences graduate students’ rhetorical awareness.",
    badExample:
      "This paper is about many things.",
    decision: {
      question:
        "What happens if Move 3 is too broad?",
      options: [
        { text: "The study loses rhetorical credibility", correct: true },
        { text: "The literature review becomes longer", correct: false },
        { text: "The introduction becomes more engaging", correct: false }
      ],
      rationale:
        "A vague Move 3 weakens the study’s contribution and reader trust."
    },
    sandbox:
      "Write ONE sentence clearly stating the purpose of a study that directly responds to a gap."
  }
];

function loadDiagnostic() {
  document.getElementById("moveTitle").innerText = "Diagnostic Task";
  document.getElementById("movePurpose").innerText = diagnostics.text;
  fillList("moveStrategies", []);
  fillList("moveSignals", []);
  fillList("moveErrors", []);
  document.getElementById("goodExample").innerText = "";
  document.getElementById("badExample").innerText = "";
  document.getElementById("taskQuestion").innerText = diagnostics.question;
  renderOptions(diagnostics.options, diagnostics.explanation);
  document.getElementById("sandboxPrompt").innerText =
    "Reflection: What kind of knowledge problem does this text fail to construct?";
}

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

  document.getElementById("taskQuestion").innerText = m.decision.question;
  renderOptions(m.decision.options, m.decision.rationale);

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

function renderOptions(options, explanation) {
  const div = document.getElementById("taskOptions");
  const feedback = document.getElementById("taskFeedback");
  div.innerHTML = "";
  feedback.innerText = "";

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => {
      if (opt.correct) {
        feedback.innerText = "Correct. " + explanation;
        points += 15;
      } else {
        feedback.innerText =
          "Incorrect. This is a surface-level concern. " + explanation;
      }
      updateStatus();
    };
    div.appendChild(btn);
  });
}

function checkSandbox() {
  const text = document.getElementById("studentText").value.trim();
  const fb = document.getElementById("sandboxFeedback");

  if (text.length < 25) {
    fb.innerText =
      "Too short. Rhetorical moves require conceptual development, not fragments.";
    return;
  }

  fb.innerText =
    "Metacognitive check: Does your sentence (a) match the move’s purpose, (b) anticipate reader expectations, and (c) logically connect to surrounding moves?";
  points += 10;
  updateStatus();
}

function updateStatus() {
  document.getElementById("points").innerText = "Points: " + points;
  const percent = Math.round(((currentMove + 1) / moves.length) * 100);
  document.getElementById("progress").innerText = "Progress: " + percent + "%";
}

/* START WITH DIAGNOSTIC */
loadDiagnostic();
