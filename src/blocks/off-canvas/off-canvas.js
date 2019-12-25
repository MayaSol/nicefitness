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
