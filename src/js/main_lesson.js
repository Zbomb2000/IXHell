/**
 * Made by me (github.com/Zbomb2000)
 * This script loads the questions onto the html page
 * Licensed under the Mozilla Public License Version 2.0
 * More license information here: "https://www.mozilla.org/en-US/MPL/2.0/"
*/

console.log("I recommend not using the console to cheat.");
console.log("It makes it not fun.");
console.log("That's pretty much it.");

var answer_var;

function setQuestion() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  var answer = num1 + num2;

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
  document.getElementById("answer").innerHTML = answer;
}

function submitAnswer() {
  var user_answer = document.getElementById("answer-input").value;
  if (user_answer == document.getElementById("answer").innerHTML) {
    console.log("You're an idiot. The correct answer was '"+document.getElementById("answer").innerHTML+"'. You answered '"+(parseInt(user_answer)+1)+"'.");
  }
  else {
    console.log("You're an idiot. The correct answer was '"+document.getElementById("answer").innerHTML+"'. You answered '"+user_answer+"'.");
  }
}

// Click submit when enter is clicked
var input = document.getElementById("answer-input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});


setQuestion();
