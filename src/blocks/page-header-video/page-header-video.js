const ready = require('../../js/utils/documentReady.js');

ready(function(){
  console.log('page-header-video');
  var videoElem = document.querySelector('.page-header-video');
  var playBtn = document.querySelector('.page-header__btn-play');

  console.log('videoElem autoplay');
  console.log(videoElem.autoplay);
  console.log('videoElem paused');
  console.log(videoElem.paused);
  // videoElem.pause();
  console.log('state');
  console.log(videoElem.readyState);

  if (videoElem) {

    function videoPlay(event) {
      console.log('videoPlay');
      if (playBtn.classList.contains('paused')) {
        playBtn.classList.remove('paused');
      }
      // !!!
    // videoElem.pause();
    // !!!
    }

    function videoPause(event) {
      if (!playBtn.classList.contains('paused')) {
        playBtn.classList.add('paused');
      }
    }

    // videoElem.addEventListener('canplay', function () {
    //   console.log('canplaythrough');
    //   videoElem.play();
    // });

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

    soundBtn = document.querySelector('.btn-sound');

    if (soundBtn) {
      videoElem.muted=true;
      if (!soundBtn.classList.contains('btn-sound--off')) {
          soundBtn.classList.add('btn-sound--off');
      }

      soundBtn.addEventListener('click', function() {
        console.log(videoElem.muted);
        if (videoElem.muted) {
          videoElem.muted=false;
          this.classList.remove('btn-sound--off');
        }
        else {
          if (!this.classList.contains('btn-sound--off')) {
            videoElem.muted=true;
            this.classList.add('btn-sound--off');
          }
        }
      });
    }

    console.log('videoElem');
    console.log(videoElem);

  }

});

// const $ = require('jquery');
// $( document ).ready(function() {});
