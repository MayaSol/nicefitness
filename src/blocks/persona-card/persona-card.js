
const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function(){

  showMoreBtns = document.querySelectorAll('.persona-card__show-more');

  for (let i=0; i<showMoreBtns.length; i++) {
    showMoreBtns[i].addEventListener('click',function() {
      var list = this.closest('.persona-card__skills');
      console.log(list);
      if (!(list.classList.contains('persona-card__skills--show-all'))) {
        list.classList.add('persona-card__skills--show-all');
      }
    })
  }

  showLessBtns = document.querySelectorAll('.persona-card__show-less');

  for (let i=0; i<showLessBtns.length; i++) {
    showLessBtns[i].addEventListener('click',function() {
      var list = this.closest('.persona-card__skills');
      console.log(list);
      if (list.classList.contains('persona-card__skills--show-all')) {
        list.classList.remove('persona-card__skills--show-all');
      }
    })
  }


});
