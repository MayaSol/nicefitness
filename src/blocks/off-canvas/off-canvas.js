/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){


  var offsetBtns = document.querySelectorAll('*[data-toggle]');

  for (var i = 0; i<offsetBtns.length; i++) {
    var btn = offsetBtns[i];
    btn.addEventListener('click', offsetBtnClick);
  }

  function offCanvasToggle() {
    document.getElementById('off-canvas').classList.toggle('off-canvas--open');
    if (document.getElementById('off-canvas').classList.contains('off-canvas--open')) {
      if(!document.body.classList.contains('off-canvas-wrapper--open')) {
        document.body.classList.add('off-canvas-wrapper');
      }
    }
    else {
      document.body.classList.remove('off-canvas-wrapper');
    }
  }

  function offsetBtnClick (event) {
    if(this.dataset.toggle === 'off-canvas') {
      event.preventDefault();
      offCanvasToggle();
    }
    // возможность совместить переключение off-canvas и встроенную функ-сть
    if(this.dataset.toggleNative === 'off-canvas') {
      offCanvasToggle();
    }
  };


});
