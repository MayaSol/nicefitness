
const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function(){

  var subscribeFields = document.querySelectorAll('.field-text--subscribe');

  for (let i=0; i<subscribeFields.length; i++) {
    var input = subscribeFields[i].querySelector('.field-text__input');
    var name = subscribeFields[i].querySelector('.field-text__name');
    input.addEventListener('focus',function() {
      name.classList.add('show');
    })
    input.addEventListener('blur',function() {
      name.classList.remove('show');
    })
  }


});
