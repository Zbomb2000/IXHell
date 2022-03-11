/**
 * Made by me (github.com/Zbomb2000)
 * This script loads the questions onto the html page
 * Licensed under the Mozilla Public License Version 2.0
 * More license information here: "https://www.mozilla.org/en-US/MPL/2.0/"
*/

console.log("I recommend not using the console to cheat.");
console.log("It makes it not fun.");
console.log("That's pretty much it.");


function randomizeHeader() {
  var random_var = Math.floor(Math.random() * 16);
  if (random_var == 1) {
    return "You're an idiot...";
  } else if (random_var == 0) {
    return "This is why you have no friends...";
  } else if (random_var == 2) {
    return "Get smarter...";
  } else if (random_var == 3) {
    return "Wrong...";
  } else if (random_var == 4) {
    return "Nobody likes you...";
  } else if (random_var == 5) {
    return "You're a monkey, right?";
  } else if (random_var == 6) {
    return "I can feel the unintellegence radiating from you..";
  } else if (random_var == 7) {
    return "A word to describe you is 'idiotic'...";
  } else if (random_var == 8) {
    return "A word to describe you is 'unintellegent'...";
  } else if (random_var == 9) {
    return "A word to describe you is 'ignorant'...";
  } else if (random_var == 10) {
    return "I'm going to act like you didn't get that wrong...";
  } else if (random_var == 11) {
    return "Small children could do better than you...";
  } else if (random_var == 12) {
    return "Have you considered professional counseling?";
  } else if (random_var == 13) {
    return "Have you considered returning to preschool?";
  } else if (random_var == 14) {
    return "I'm assuming you're not trying...";
  } else {
    return "This is why your parents don't love you...";
  }
}

function setQuestion() {
  var num1 = Math.floor(Math.random() * 11);
  var num2 = Math.floor(Math.random() * 11);
  var answer = num1 + num2;
  var question_number = Math.floor(Math.random() * 100);

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
  document.getElementById("answer").innerHTML = answer;
  document.getElementById("question_number").innerHTML = question_number;
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
