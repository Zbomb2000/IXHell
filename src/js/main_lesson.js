// Sends console messages
console.log("I recommend not using the console to cheat.");
console.log("It's not very hard, but it's also not fun.");
console.log("That's pretty much it.");

// THIS IS REALLY IMPORTANT. IT LOADS THE LESSON DATA FROM THE JSON FILE
var lesson_data = window.lesson_dataa;

// Creates variables
var display_text = "";

function testJsonStuff(ld) {
  // Gets data
  var q1 = ld["qone"];

  // Gets important number
  if (ld[1] == true) {
    display_text = q1[3];
  }
  else {
    display_text = q1[2];
  }

  // Displays question
  document.getElementById("question-box").innerHTML = q1[display_text];
}

testJsonStuff(lesson_data);
