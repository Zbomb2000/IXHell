var cover_opacity = 1;
function onOpen() {
  if (cover_opacity > 0) {
    cover_opacity -= .05;
    setTimeout(function() {
      onOpen()
    }, 0);
  }
  document.getElementById('cover').style.opacity = cover_opacity;
  if (cover_opacity < 0) {
    document.getElementById("cover").style.zIndex = "-1000";
  }
}

onOpen();
