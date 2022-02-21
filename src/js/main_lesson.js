/**
 * Made by me (github.com/Zbomb2000)
 * This script loads the questions onto the html page
 * Licensed under the Mozilla Public License Version 2.0
 * More license information here: "https://www.mozilla.org/en-US/MPL/2.0/"
*/

console.log("I recommend not using the console to cheat.");
console.log("It makes the program not fun.");
console.log("That's pretty much it.");

// Load json
var json_lesson_data = window.lesson_data;

function setQuestion(ld) {
  var display_text = "";

  // Gets data from json dictionary
  var question_info = ld["q_one"];

  if (question_info[1] == true) {
    display_text = question_info[3];
  } else {
    display_text = question_info[2];
  }

  document.getElementById("question-box").innerHTML = display_text;
}

setQuestion(lesson_data);
