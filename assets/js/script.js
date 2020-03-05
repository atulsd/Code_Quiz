var startQuiz = document.querySelector("#startQuiz");
var startQuizcount = 0;

localStorage.setItem("startQuizcount", startQuizcount);
startQuiz.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.setItem("time", 100);
  location.href = "questions.html";
});
