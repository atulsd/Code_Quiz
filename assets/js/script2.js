var result = document.querySelector("#result");
var resultIs = localStorage.getItem("finalResult");
var highScore = document.querySelector("#highscore");

var score = localStorage.getItem("score");
result.textContent = resultIs;

var resultTime = setInterval(function() {
  result.textContent = "";
}, 2000);

highScore.textContent = score;