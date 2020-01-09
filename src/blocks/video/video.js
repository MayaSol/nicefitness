const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function(){

  if (!document.querySelector('.video')) {
    return;
  }

  //youtube video
  console.log('youtube');
  var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var firstScriptTag = document.getElementsByTagName('script')[0];

  var player;
  var btnGo = document.querySelector('.page-header__btn-play');
  var videoContainer = document.querySelector('#page-header-video');


  window.onPlayerReady = function(event) {
    console.log('onPlayerReady');
    console.log(event);

    player.playVideo();

    function btnGoClick(event) {

      if (player.getPlayerState() == YT.PlayerState.PLAYING) {
        // console.log('bntGoClik');
        // console.log(this);
        // console.log(event);
        // this.classList.remove('paused');
        player.stopVideo();
      }
      else {
        // this.classList.add('paused');
        player.playVideo();
      }
    }

    btnGo.addEventListener('click', btnGoClick);
  }


  window.onPlayerStateChange = function(event) {
      if (player.getPlayerState() == YT.PlayerState.PLAYING) {
        // console.log('bntGoClik');
        // console.log(this);
        // console.log(event);
        btnGo.classList.remove('paused');
      }
      else {
        btnGo.classList.add('paused');
      }
  }


  window.onYouTubeIframeAPIReady = function() {
    console.log('onYouTubeIframeAPIReady');

    player = new YT.Player('page-header-video', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
  }


    //video
    // var vid = document.getElementById("car-video");
    // var vidBtn = document.querySelector(".car-slider__btn-go");

    // vidBtn.addEventListener('click',function(event) {
    //   if (this.classList.contains('playing')) {
    //     this.classList.remove('playing');
    //     vid.pause();
    //     vid.classList.add('video-hidden');
    //   }
    //   else {
    //     this.classList.add('playing');
    //     vid.classList.remove('video-hidden');
    //     vid.play();
    //   }
    // });

    // function playVid() {
    //     vid.play();
    // }

    // function pauseVid() {
    //     vid.pause();
    // }




});


