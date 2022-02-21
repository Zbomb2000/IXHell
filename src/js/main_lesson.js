// Sends console messages
console.log("I recommend not using the console to cheat.");
console.log("It makes the program not fun.");
console.log("That's pretty much it.");

// THIS IS REALLY IMPORTANT. IT LOADS THE LESSON DATA FROM THE JSON FILE
var lesson_data = window.lesson_dataa;

// Creates variables
var display_text = "";

function testJsonStuff(ld) {
  // Gets data
  var q1 = ld["q_one"];

  // Gets important number
  if (q1[1] == true) {
    display_text = q1[3];
  } else {
    display_text = q1[2];
  }

  // Displays question
  document.getElementById("question-box").innerHTML = display_text;
}

testJsonStuff(lesson_data);
