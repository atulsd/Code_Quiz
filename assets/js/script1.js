var answer = document.querySelector("#answer");
var question = document.querySelector("#question");
var timeStart = localStorage.getItem("time");

var timer = document.querySelector("#timer");
var questions = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
var answersQone = ["1a", "1b", "1c", "1d"];
var answersQtwo = ["2a", "2b", "2c", "2d"];
var answersQthree = ["3a", "3b", "3c", "3d"];
var correctAnswers = ["1a", "2b", "3c"];

var answers;
var stored;
var score = 0;

timer.textContent = timeStart;
if (localStorage.getItem("startQuizcount") === "0") {
  addAnswers();
  startTimer();
}

function startTimer() {
  //setTime();
  interval = setInterval(function() {
    //secondsElapsed++;
    //So renderTime() is called here once every second.
    renderTime();
  }, 1000);
}

function renderTime() {
  timeStart--;
  if (timeStart === 0) {
    location.href = "highscores.html";
  }
  timer.textContent = timeStart;
}

function addAnswers() {
  answer.innerHTML = "";
  stored = localStorage.getItem("startQuizcount");
  if (stored === "0") {
    question.textContent = questions[parseInt(stored)];
    answers = answersQone;
    localStorage.setItem("startQuizcount", "1");
  } else if (stored === "1") {
    question.textContent = questions[parseInt(stored)];
    answers = answersQtwo;
    localStorage.setItem("startQuizcount", "2");
  } else if (stored === "2") {
    question.textContent = questions[parseInt(stored)];
    answers = answersQthree;
    localStorage.setItem("startQuizcount", "3");
  } else {
    localStorage.setItem("score", score);
    location.href = "highscores.html";
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
    result.textContent = "Correct answer" + answers[index];
    var resultTime = setInterval(function() {
      result.textContent = "";
    }, 3000);
    localStorage.setItem("finalResult", "Correct");
    score += 10;
  } else {
    result.textContent = "Incorrect answer" + answers[index];
    var resultTime = setInterval(function() {
      result.textContent = "";
    }, 3000);
    penalty();
    localStorage.setItem("finalResult", "Incorrect");
  }
  addAnswers();
});

function penalty() {
  timeStart -= 15;
  timer.textContent = timeStart;
  // timeStart--;
}
