const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function(){

  showMoreBtns = document.querySelectorAll('.vacs__sub-show-more');

  for (let i=0; i<showMoreBtns.length; i++) {
    showMoreBtns[i].addEventListener('click',function() {
      var list = this.closest('.vacs__sub');
      if (!(list.classList.contains('vacs__sub--show-all'))) {
        list.classList.add('vacs__sub--show-all');
      }
    })
  }

  showLessBtns = document.querySelectorAll('.vacs__sub-show-less');

  for (let i=0; i<showLessBtns.length; i++) {
    showLessBtns[i].addEventListener('click',function() {
      var list = this.closest('.vacs__sub');
      if (list.classList.contains('vacs__sub--show-all')) {
        list.classList.remove('vacs__sub--show-all');
      }
    })
  }


});
