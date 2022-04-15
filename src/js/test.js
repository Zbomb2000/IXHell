function correctQuestionChance() {
  random_chance = Math.floor(Math.random() * 9);
  if (random_chance == 9) {
    return true;
  } else {
    return false;
  }
}

var possible_answer = correctQuestionChance();

function setup() {
  if (possible_answer) {
    console.log("The answer was possible.");
  } else {
    setImpossibleQuestion();
  }
}

function submitAnswer() {
  if (possible_answer) {
    console.log("The answer was possible.")
  } else {
    submitImpossibleAnswer();
  }
}
