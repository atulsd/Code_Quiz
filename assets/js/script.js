var startQuiz = document.querySelector("#startQuiz");
var displayQuestion;
var checkAnswer;
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

startQuiz.addEventListener("click", function(event) {
  event.preventDefault();
  location.href = "questions.html";
  //   alert("inside start quiz function");
});
