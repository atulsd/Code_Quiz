var checkAnswer1 = document.querySelector("#answer1");
var checkAnswer2 = document.querySelector("#answer2");
var checkAnswer3 = document.querySelector("#answer3");
var checkAnswer4 = document.querySelector("#answer4");

var qandA = {
  first: {
    question: "a",
    answer1: "1a",
    answer2: "2a",
    answer3: "3a",
    answer4: "4a",
    correct: "1a"
  },
  second: {
    question: "b",
    answer1: "1b",
    answer2: "2b",
    answer3: "3b",
    answer4: "4b",
    correct: "2b"
  },
  third: {
    question: "c",
    answer1: "1c",
    answer2: "2c",
    answer3: "3c",
    answer4: "4c",
    correct: "3c"
  }
};

if (localStorage.getItem("startQuizcount") === "0") {
  alert("locat storage is:" + localStorage.getItem("startQuizcount"));
  //   for (var i = 0; i < 4; i++) {
  //     if (i === 0) {
  answer1.textContent = qandA.first.answer1;
  //     }
  //     if (i === 1) {
  answer2.textContent = qandA.first.answer2;
  //     }
  //     if (i === 2) {
  answer3.textContent = qandA.first.answer3;
  //     }
  //     if (i === 3) {
  answer4.textContent = qandA.first.answer4;
  //     }
  //   }
  localStorage.setItem("startQuizcount", "1");
} else if (localStorage.getItem("startQuizcount") === "1") {
  alert("locat storage is:" + localStorage.getItem("startQuizcount"));
  //   for (var i = 0; i < 4; i++) {
  //     if (i === 0) {
  answer1.textContent = qandA.second.answer1;
  //     }
  //     if (i === 1) {
  answer2.textContent = qandA.second.answer2;
  //     }
  //     if (i === 2) {
  answer3.textContent = qandA.second.answer3;
  //     }
  //     if (i === 3) {
  answer4.textContent = qandA.second.answer4;
  //     }
  //   }
}
checkAnswer1.addEventListener("click", function(event) {
  event.preventDefault();
  alert("Answer clicked is:" + qandA.first.answer1);
  alert(event.target);
  if (localStorage.getItem("startQuizcount") === "1") {
    alert("locat storage is:" + localStorage.getItem("startQuizcount"));
    //   for (var i = 0; i < 4; i++) {
    //     if (i === 0) {
    answer1.textContent = qandA.second.answer1;
    //     }
    //     if (i === 1) {
    answer2.textContent = qandA.second.answer2;
    //     }
    //     if (i === 2) {
    answer3.textContent = qandA.second.answer3;
    //     }
    //     if (i === 3) {
    answer4.textContent = qandA.second.answer4;
    //     }
    //   }
  }
});
checkAnswer2.addEventListener("click", function(event) {
  alert("Answer clicked is:" + qandA.first.answer2);
});
checkAnswer3.addEventListener("click", function(event) {
  alert("Answer clicked is:" + qandA.first.answer3);
});
checkAnswer4.addEventListener("click", function(event) {
  alert("Answer clicked is:" + qandA.first.answer4);
});
