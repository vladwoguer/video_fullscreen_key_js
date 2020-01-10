
videos = [
"videos/Video1.mp4",
"videos/Video2.mp4",
"videos/Video3.mp4",
"videos/Video4.mp4",
"videos/Video5.mp4",
"videos/Video6.mp4",
"videos/Video7.mp4",
"videos/Video8.mp4"
];

removeVideo = function() {
  video = document.getElementById("video");
  video.remove();
}

playVideo = function (index) {
  wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = '<video autoplay onended="removeVideo()" id="video" width="320" height="240" controls> <source src="' + videos[index]+'" type="video/mp4"> </video>';
  var elem = document.getElementById("video");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
  
}

function isFullScreen() {
        return (document.fullscreenElement && document.fullscreenElement !== null) ||
                 (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
                 (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
                 (document.msFullscreenElement && document.msFullscreenElement !== null);
    }

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}


function stopPlaying() {
video = document.getElementById("video");
    if(isFullScreen()) {
      closeFullscreen();
    }
      if(video) {
      	video.remove();
      }
}

document.addEventListener("keyup", function(e) {
 if(e.keyCode == 27 || e.keyCode == 69) { //Esc or e
    stopPlaying();
    }
}, false);




document.addEventListener("keydown", function(e) {
   
    if (e.keyCode >= 96 && e.keyCode <= 103 ) { // Keypad 0 to 7
    video = document.getElementById("video");
   stopPlaying();
      setTimeout(()=> playVideo(e.keyCode-96), 500);
    }
  }, false);


