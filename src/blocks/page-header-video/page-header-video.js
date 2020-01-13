const ready = require('../../js/utils/documentReady.js');

ready(function(){
  var videoElem = document.querySelector('.page-header-video');
  var playBtn = document.querySelector('.page-header__btn-play');

  if (videoElem) {

    function videoPlay(event) {
      console.log('videoPlay');
      console.log(playBtn);
      if (playBtn.classList.contains('paused')) {
        playBtn.classList.remove('paused');
      }
    }

    function videoPause(event) {
      if (!playBtn.classList.contains('paused')) {
        playBtn.classList.add('paused');
      }
    }

    videoElem.addEventListener('canplay', function () {
      console.log('canplaythrough');
      videoElem.play();
    });

    videoElem.addEventListener('play', function(e) {
      console.log('play');
      videoPlay(e);
    });

    videoElem.addEventListener('pause', function(e) {
      console.log('pause');
      videoPause(e);
    });


    playBtn.addEventListener('click', function () {
      if (videoElem.paused) {  // если видео остановлено, запускаем
          videoElem.play();
      } else {
          videoElem.pause();
      }
    }, false);

  }

});

// const $ = require('jquery');
// $( document ).ready(function() {});
