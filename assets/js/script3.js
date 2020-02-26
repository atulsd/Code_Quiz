var score = localStorage.getItem("score");
var initials = localStorage.getItem("initials");

var list = document.querySelector("#list");

var initialsAndscore;
var initScore = [];
initScore = initials + " " + score;
localStorage.setItem("initScore", initScore);
var getInitscore = localStorage.getItem("initScore");

initialsAndscore = document.createElement("li");
initialsAndscore.innerText = getInitscore;
list.appendChild(initialsAndscore);

var goBack = document.querySelector("#add-btn");

$("#add-btn").on("click", function() {
  sendToindex();
});

$("#add-btn1").on("click", function() {
  clearHighscores();
});

function clearHighscores() {
  event.preventDefault();
  list.remove();
  localStorage.setItem("score", "Data");
  localStorage.setItem("initials", "No");
}

function sendToindex() {
  event.preventDefault();
  location.href = "index.html";
}
