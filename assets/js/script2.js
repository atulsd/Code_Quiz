var result = document.querySelector("#result");
var resultIs = localStorage.getItem("finalResult");
var highScore = document.querySelector("#highscore");

var submitInfo = document.querySelector("#add-btn");
var score = localStorage.getItem("score");
result.textContent = resultIs;

var resultTime = setInterval(function() {
  result.textContent = "";
}, 2000);

highScore.textContent = score;

submitInfo.addEventListener("click", function(event) {
  event.preventDefault();
  if (initials.value === "") {
    alert("Initials can not be blank.");
  } else {
    localStorage.setItem("initials", initials.value.trim());
    location.href = "highScorelist.html";
  }
});
