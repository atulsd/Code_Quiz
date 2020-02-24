var startQuiz = document.querySelector("#startQuiz");
var displayQuestion;
//var checkAnswer = document.querySelector("#data-answer");
var displayAnswer;
var generateScore;
var subtractTimer;
var setTime;
var timeRemaining;
var gameOver;
var addTotalscore;
var viewHighscores;
var addInitials;
var viewInitials;

var startQuizcount = 0;

var qandA = {
  first: {
    question: "a",
    answer1: "1a",
    answer2: "2a",
    answer3: "3a",
    answer4: "4a"
  },
  second: {
    question: "b",
    answer1: "1b",
    answer2: "2b",
    answer3: "3b",
    answer4: "4b"
  },
  third: {
    question: "c",
    answer1: "1c",
    answer2: "2c",
    answer3: "3c",
    answer4: "4c"
  }
};

// setTime();
// displayQuestion();
// checkAnswer();
// displayAnswer();
// subtractTimer();
// generateScore();
// addTotalscore();
// gameOver();
// addInitials();
// viewHighscores();
// viewInitials();

localStorage.setItem("startQuizcount", startQuizcount);
//startQuizcount = localStorage.getItem("startQuizcount");
//alert("From local storage." + startQuizcount);
//if (startQuizcount === "1") {
//  alert("Start quiz count is:" + startQuizcount);
startQuiz.addEventListener("click", function(event) {
  event.preventDefault();
  //  localStorage.setItem("startQuizcount", startQuizcount);
  location.href = "questions.html";
  alert("Start quiz count is:" + startQuizcount);
});
