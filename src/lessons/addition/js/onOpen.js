function correctQuestionChance() {
  random_chance = Math.floor(Math.random() * 9);
  if (random_chance == 10) {
    return true;
  } else {
    return false;
  }
}

localStorage.setItem("possible_question", correctQuestionChance());
window.open("addition_lesson.html", '_self');
