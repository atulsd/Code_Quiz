var answer = document.querySelector("#answer");
var question = document.querySelector("#question");

var questions = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
var answersQone = ["1a", "1b", "1c", "1d"];
var answersQtwo = ["2a", "2b", "2c", "2d"];
var answersQthree = ["3a", "3b", "3c", "3d"];
var correctAnswers = ["1a", "2b", "3c"];

var answers;

if (localStorage.getItem("startQuizcount") === "0") {
  addAnswers();
}

function addAnswers() {
  answer.innerHTML = "";

  if (localStorage.getItem("startQuizcount") === "0") {
    alert("I am zero mate");
    question.textContent = questions[0];
    answers = answersQone;
    localStorage.setItem("startQuizcount", "1");
  } else if (localStorage.getItem("startQuizcount") === "1") {
    alert("I am one mate");
    question.textContent = questions[1];
    answers = answersQtwo;
    localStorage.setItem("startQuizcount", "2");
  } else if (localStorage.getItem("startQuizcount") === "2") {
    alert("I am two mate");
    question.textContent = questions[2];
    answers = answersQthree;
    localStorage.setItem("startQuizcount", "3");
  }
  var numbering = 0;

  for (var i = 0; i < answers.length; i++) {
    var answersAre = answers[i];

    var li = document.createElement("li");
    li.textContent = ++numbering + ". " + answersAre;
    li.setAttribute("data-index", i);
    answer.appendChild(li);
  }
}

answer.addEventListener("click", function(event) {
  var element = event.target;
  var index = element.getAttribute("data-index");
  if (answers[index] === correctAnswers[index]) {
    result.textContent = "Correct" + answers[index];
  } else {
    result.textContent = "Incorrect Answer" + answers[index];
  }
  addAnswers();
});
