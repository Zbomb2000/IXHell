/**
 * Made by me (github.com/Zbomb2000)
 * This script loads the questions onto the html page
 * Licensed under the Mozilla Public License Version 2.0
 * More license information here: "https://www.mozilla.org/en-US/MPL/2.0/"
*/

console.log("I recommend not using the console to cheat.");
console.log("It makes it not fun.");
console.log("That's pretty much it.");

qnum_save = localStorage.getItem("question_num_add");
ss_save = localStorage.getItem("ss_addition");
if (qnum_save == null) {
  localStorage.setItem("question_num_add", 0);
}
if (ss_save == null) {
  localStorage.setItem("ss_addition", 0);
}

function onOpen() {
  var questions_answered = localStorage.getItem("question_num_add");
  if (questions_answered > 0) {
    document.getElementById("tutorial-div").style.visibility = "hidden";
  }
}

function removePoints() {
  var num1 = Math.floor(Math.random() * 5000);
  var smart_score_html = document.getElementById("SmartScore");
  var smart_score = localStorage.getItem("ss_addition");

  num2 = smart_score - num1;
  console.log(smart_score);
  console.log(num1);
  console.log(num2);
  smart_score_html.innerHTML = num2;
  localStorage.setItem("ss_addition", num2);
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

  document.getElementById("tutorial-div").style.visibility = "hidden";
  document.getElementById("incorrect-header").innerHTML = randomizeHeader();
  if (user_answer == answer) {
    incorrect_text.innerHTML = "The correct answer was '"+(parseInt(answer)+1)+"'. You answered '"+user_answer+"'.";
  }
  else {
    incorrect_text.innerHTML = "The correct answer was '"+answer+"'. You answered '"+user_answer+"'.";
  }
  frame2.style.zIndex = "4";

  removePoints();

  question_number = localStorage.getItem("question_num_add");
  question_number = parseInt(question_number) + 1;
  localStorage.setItem("question_num_add", question_number);
  document.getElementById('submit').disabled = "disabled";
}

function resetPageData() {
  localStorage.setItem("ss_addition", 0);
  localStorage.setItem("question_num_add", 0);
  window.location.reload();
}

// Click submit when enter is clicked
var input = document.getElementById("answer-input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});


setQuestion(localStorage.getItem("question_num_add"), localStorage.getItem('ss_addition'));
document.getElementById("body").style.display = "inline";
onOpen();
