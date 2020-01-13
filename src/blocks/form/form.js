import IMask from 'imask';

const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function(){
  console.log('form');
  var fieldPhone = document.querySelector('.form__field--phone input');
  if (fieldPhone) {
    var maskOptions = {
      mask: '+{7} (000) 000 - 00 - 00',
      lazy: false
    };
    var mask = IMask(fieldPhone, maskOptions);
  }
});
