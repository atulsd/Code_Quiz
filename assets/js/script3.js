var score = localStorage.getItem("score");
var initials = localStorage.getItem("initials");

var list = document.querySelector("#list");

var initialsAndscore = document.createElement("li");
initialsAndscore.innerText = initials + " " + score;

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
}

function sendToindex() {
  event.preventDefault();
  location.href = "index.html";
}
