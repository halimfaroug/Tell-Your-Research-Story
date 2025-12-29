/* =========================
   CORE STATE
========================= */
let currentLesson = 0;
let score = 0;

/* =========================
   LESSON DATA (EDIT THIS)
========================= */
const lessons = [
  {
    title: "Academic Writing Basics",
    content: "Academic writing is formal, objective, and evidence-based."
  },
  {
    title: "Thesis Statements",
    content: "A thesis statement presents the main argument clearly and concisely."
  }
];

const flashcards = [
  { front: "Thesis", back: "Main argument of a paper" },
  { front: "Citation", back: "Reference to a source" }
];

const quiz = [
  {
    question: "Academic writing should be:",
    options: ["Informal", "Objective", "Personal"],
    answer: 1
  }
];

/* =========================
   LESSON FUNCTIONS
========================= */
function loadLesson() {
  document.getElementById("lessonTitle").innerText =
    lessons[currentLesson].title;

  document.getElementById("lessonContent").innerText =
    lessons[currentLesson].content;
}

function nextLesson() {
  if (currentLesson < lessons.length - 1) {
    currentLesson++;
    loadLesson();
  } else {
    alert("You completed all lessons.");
  }
}

/* =========================
   FLASHCARDS
========================= */
let cardIndex = 0;
let flipped = false;

function loadFlashcard() {
  const card = flashcards[cardIndex];
  document.getElementById("cardText").innerText =
    flipped ? card.back : card.front;
}

function flipCard() {
  flipped = !flipped;
  loadFlashcard();
}

function nextCard() {
  cardIndex = (cardIndex + 1) % flashcards.length;
  flipped = false;
  loadFlashcard();
}

/* =========================
   QUIZ
========================= */
function loadQuiz() {
  const q = quiz[0];
  document.getElementById("quizQuestion").innerText = q.question;

  const optionsDiv = document.getElementById("quizOptions");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quiz[0].answer) {
    score++;
    alert("Correct");
  } else {
    alert("Wrong");
  }
  document.getElementById("quizScore").innerText = `Score: ${score}`;
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("lessonTitle")) loadLesson();
  if (document.getElementById("cardText")) loadFlashcard();
  if (document.getElementById("quizQuestion")) loadQuiz();
});
