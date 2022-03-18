/**
 * Made by me (github.com/Zbomb2000)
 * This script loads the questions onto the html page
 * Licensed under the Mozilla Public License Version 2.0
 * More license information here: "https://www.mozilla.org/en-US/MPL/2.0/"
*/

console.log("I recommend not using the console to cheat.");
console.log("It makes it not fun.");
console.log("That's pretty much it.");

qnum_save = localStorage.getItem("question_num");
ss_save = localStorage.getItem("smart_score");
if (qnum_save == null) {
  localStorage.setItem("question_num", 0);
}
if (ss_save == null) {
  localStorage.setItem("smart_score", 0);
}

function removePoints() {
    var num1 = Math.floor(Math.random() * 5000);
  var smart_score_html = document.getElementById("SmartScore");
  var smart_score = localStorage.getItem("smart_score");

  num2 = smart_score - num1;
  console.log(smart_score);
  console.log(num1);
  console.log(num2);
  smart_score_html.innerHTML = num2;
  localStorage.setItem("smart_score", num2);
}

function setQuestion(question_number, smart_score) {
  var num1 = Math.floor(Math.random() * 11);
  var num2 = Math.floor(Math.random() * 11);
  var answer = num1 + num2;

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
  document.getElementById("answer").innerHTML = answer;
  document.getElementById("questions-answered").innerHTML = question_number;
  document.getElementById("SmartScore").innerHTML = smart_score;
}

function submitAnswer() {
  var answer = document.getElementById("answer").innerHTML;
  var user_answer = document.getElementById("answer-input").value;
  var incorrect_text = document.getElementById("message-thing");
  var frame2 = document.getElementById("incorrect-div");

  document.getElementById("incorrect-header").innerHTML = randomizeHeader();
  if (user_answer == answer) {
    incorrect_text.innerHTML = "The correct answer was '"+(parseInt(answer)+1)+"'. You answered '"+user_answer+"'.";
  }
  else {
    incorrect_text.innerHTML = "The correct answer was '"+answer+"'. You answered '"+user_answer+"'.";
  }
  frame2.style.zIndex = "4";

  removePoints();

  question_number = localStorage.getItem("question_num");
  question_number = parseInt(question_number) + 1;
  localStorage.setItem('question_num', question_number);
  document.getElementById('submit').disabled = "disabled";
}

// Click submit when enter is clicked
var input = document.getElementById("answer-input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});


setQuestion(localStorage.getItem("question_num"), localStorage.getItem('smart_score'));
document.getElementById("body").style.display = "inline";
