/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){

  const galleries = document.querySelectorAll('.gallery');

  for(let i=0; i<galleries.length; i++) {

    galleries[i].addEventListener('click',function() {
      console.log('click');
      console.log(this);
      console.log(this.querySelector('.gallery-content'));
      var gallery = this.querySelector('.gallery-content');
      if (gallery) {
        lightGallery(gallery, {thumbnail:true});
        var firstImg = this.querySelector('.gallery-content > li:first-child');
        firstImg.click();
      }
    })
  }

});
