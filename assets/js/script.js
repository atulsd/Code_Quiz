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
startQuiz.addEventListener("click", function(event) {
  event.preventDefault();
  location.href = "questions.html";
  alert("Start quiz count is:" + startQuizcount);
});
