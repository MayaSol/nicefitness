import Glide from '@glidejs/glide'

const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function(){
  console.log(document.documentElement.clientWidth);

  var articleSlider = document.querySelector('.article-slider__slider');
  if (!articleSlider) {
    return;
  }

  var screenWidth = document.documentElement.clientWidth;
  console.log('screenWidth: ' + screenWidth);
  var containerWidth = document.querySelector('.page__section-inner').offsetWidth;
  console.log('containerWidth: ' + containerWidth);

  var peekValue = (screenWidth - containerWidth)/2;
  console.log(peekValue);


  var articleSlider = new Glide('.article-slider__slider', {
    type: 'carousel',
    perView: 1,
    //gap: 40,
    peek: {
      before: peekValue,
      after: peekValue
    },
    // animationTimingFunc: 'linear',
    //peek: {before: '0', arter: '428'},
    breakpoints: {
      1279: {
      }
    }
  });

  articleSlider.mount();

  var arrows = document.querySelector('.article-slider__arrows');
  sliderArrows(arrows, [articleSlider]);


  // Стрелки слайдера навигации по моделям
  function sliderArrows(arrowsElem,sliders) {

    arrowsElem.querySelector('.btn--slider-next').addEventListener("click", function(event) {
      for (let i=0; i<sliders.length; i++) {
        sliders[i].go('>');
      }
    });

    arrowsElem.querySelector('.btn--slider-prev').addEventListener("click", function(event) {
      for (let i=0; i<sliders.length; i++) {
        sliders[i].go('<');
      }
    });
  }

});


