var cover_opacity = 0;

function transitionToMain() {
  if (cover_opacity < 1) {
    document.getElementById("cover").style.zIndex = "1000";
    cover_opacity += .075;
    setTimeout(function() {
      transitionToMain()
    }, 75);
  }
  document.getElementById('cover').style.opacity = cover_opacity;
  if (cover_opacity > 1) {
    window.open('main_page.html', '_self')
  }
}
