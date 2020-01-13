const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function(){
  var expandBtns = document.querySelectorAll('.expand__btn');


  function expandBtnClick(event) {
    console.log('click');
    console.log(event);
    console.log(this);

    var content = this.nextElementSibling;

    if (this.classList.contains('expand__btn--closed')) {
      this.classList.remove('expand__btn--closed');
    }
    else {
      this.classList.add('expand__btn--closed');
    }
  }

  for (var i=0; i < expandBtns.length; i++) {
    expandBtns[i].addEventListener('click', expandBtnClick);
  }
});
