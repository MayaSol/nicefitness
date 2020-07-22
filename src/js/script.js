const ready = require('./utils/documentReady.js');

ready(function(){
  console.log('DOM героически построен! script.js');


  document.querySelectorAll('.link-list__img').forEach(function(item){
    // item.addEventListener('mouseenter', function(event) {
    //   event.stopPropagation();
    // });
    item.addEventListener('mouseover', function(event) {
      event.stopPropagation();
    });
  });


    document.querySelectorAll('.link-list__link').forEach(function(item){
      console.log(item);

      item.addEventListener('mouseover', function(event) {
          console.log('mouseenter');
          console.log(this);
          console.log(event.target);
          if (!this.classList.contains('active')) {
            this.classList.add('active');
          }
      });

      item.addEventListener('mouseout', function(event) {
          console.log('mouseleave');
          console.log(this);
          console.log(event.target);
          this.classList.remove('active');
      });

    });
});

// const $ = require('jquery');
// $( document ).ready(function() {});
