const ready = require('../../js/utils/documentReady.js');

ready(function(){
  var videoElem = document.querySelector('.page-header-video');
  var playBtn = document.querySelector('.page-header__btn-play');

  videoElem.addEventListener('canplaythrough', function () {
    videoElem.play();
  });

  playBtn.addEventListener('click', function () {
    if (videoElem.paused) {  // если видео остановлено, запускаем
        videoElem.play();
    } else {
        videoElem.pause();
    }
}, false);
});

// const $ = require('jquery');
// $( document ).ready(function() {});
