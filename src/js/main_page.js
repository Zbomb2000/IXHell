var cover_opacity = 0;
function onOpen() {
  if (cover_opacity < 1) {
    cover_opacity += .05;
    setTimeout(function() {
      onOpen()
    }, 75);
  }
  document.getElementById('cover').style.opacity = cover_opacity;
  if (cover_opacity > 1) {
    document.getElementById("cover").style.zIndex = "-1";
  }
}

onOpen()
