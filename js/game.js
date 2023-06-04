const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Inside which HTML element do we include JavaScript?",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<script/>",
    answer: 1,
  },
  {
    question: "Inside which HTML element do we define styles?",
    choice1: "<style>",
    choice2: "<css>",
    choice3: "<design>",
    choice4: "<stylesheet>",
    answer: 1,
  },
  {
    question: "What does HTML stand for?",
    choice1: "Hyper Text Markup Language",
    choice2: "Home Tool Markup Language",
    choice3: "Hyperlinks and Text Markup Language",
    choice4: "Hyper Text Meta Language",
    answer: 1,
  },
];

// CONTANTS

const CORRECT_BOMUS = 10;
const MAX_QUESTION = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestions();
};

getNewQuestions = () => {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
};

startGame();
