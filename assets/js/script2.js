var result = document.querySelector("#result");
var resultIs = localStorage.getItem("finalResult");
var highScore = document.querySelector("#highscore");

var score = localStorage.getItem("score");

result.textContent = resultIs;
highScore.textContent = score;
