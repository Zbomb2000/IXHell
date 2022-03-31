function randomizeHeader() {
  var random_var = Math.floor(Math.random() * 13);
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
  } else if (random_var == 10) {
    return "I'm going to act like you didn't get that wrong...";
  } else if (random_var == 7) {
    return "Small children could do better than you...";
  } else if (random_var == 8) {
    return "Have you considered professional counseling?";
  } else if (random_var == 11) {
    return "Have you considered returning to preschool?";
  } else if (random_var == 9) {
    return "I'm assuming you're not trying...";
  } else {
    return "This is why your parents don't love you...";
  }
}
