var answer = document.querySelector("#answer");
var question = document.querySelector("#question");
var timeStart = localStorage.getItem("time");

var timer = document.querySelector("#timer");

var questions = [
  "What does Nan means?",
  "What will the code output?____console.log(0.1 + 0.2)____ console.log(0.1 + 0.2 == 0.3);",
  "In what order will the numbers 1-4 be logged to the console when the following code is executed?___ (function() {___console.log(1);___ setTimeout(function(){console.log(2)}, 1000);___ setTimeout(function(){console.log(3)}, 0);___ console.log(4);})",
  "Consider the following code snippet:___for (var i = 0; i < 5; i++)___ {var btn = document.createElement('button');___btn.appendChild(document.createTextNode('Button ' + i));___btn.addEventListener('click', function(){ console.log(i); });___document.body.appendChild(btn);}___(a) What gets logged to the console when the user clicks on “Button 4” and why?",
  "What will the following code output to the console and why?___var arr1 = 'john'.split('');___var arr2 = arr1.reverse();___var arr3 = 'jones'.split('');___arr2.push(arr3);___console.log('array 1: length=' + arr1.length + ' last=' + arr1.slice(-1));___console.log('array 2: length=' + arr2.length + ' last=' + arr2.slice(-1));"
];
var answersQone = [
  "Not a number",
  "Not a String",
  "Not a boolean",
  "Not a null"
];
var answersQtwo = [
  "0.3 true",
  "0.30000000000000004 false",
  "0.3 not equal",
  "0.3 string"
];
var answersQthree = ["1,3,4,2", "1,2,3,4", "1,4,3,2", "3,1,4,2"];
var answersQfour = ["2", "4", "3", "5"];
var answersQfive = [
  "array 1: length=5 last=j,o,n,e,s and array 2: length=5 last=j,o,n,e,s",
  "array 1: length=6 last=j,o,n,e,s and array 2: length=5 last=j,o,n,e,s",
  "array 1: length=4 last=j,o,n,e,s and array 2: length=5 last=j,o,n,e,s",
  "array 1: length=3 last=j,o,n,e,s and array 2: length=5 last=j,o,n,e,s"
];
var correctAnswers = [
  "Not a number",
  "0.30000000000000004 false",
  "1,4,3,2",
  "5",
  "array 1: length=5 last=j,o,n,e,s and array 2: length=5 last=j,o,n,e,s"
];

var answers;
var stored;
var score = 0;

timer.textContent = timeStart;
if (localStorage.getItem("startQuizcount") === "0") {
  addAnswers();
  startTimer();
}

function startTimer() {
  interval = setInterval(function() {
    renderTime();
  }, 1000);
}

function renderTime() {
  timeStart--;
  if (timeStart <= 0) {
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
  } else if (stored === "3") {
    question.textContent = questions[parseInt(stored)];
    answers = answersQfour;
    localStorage.setItem("startQuizcount", "4");
  } else if (stored === "4") {
    question.textContent = questions[parseInt(stored)];
    answers = answersQfive;
    localStorage.setItem("startQuizcount", "5");
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
  //Change background color of the answer clicked
  var index = element.getAttribute("data-index");
  var found = 0;
  for (var i = 0; i < correctAnswers.length; i++) {
    if (answers[index] === correctAnswers[i]) {
      result.textContent = "Correct answer";
      var resultTime = setInterval(function() {
        result.textContent = "";
      }, 3000);
      localStorage.setItem("finalResult", "Correct");
      score += 10;
      found = 1;
    }
  }
  if (found === 0) {
    result.textContent = "Incorrect answer";
    var resultTime = setInterval(function() {
      result.textContent = "";
    }, 3000);
    penalty();
    localStorage.setItem("finalResult", "Incorrect answer");
  }
  addAnswers();
});

function penalty() {
  timeStart -= 15;
  timer.textContent = timeStart;
}
