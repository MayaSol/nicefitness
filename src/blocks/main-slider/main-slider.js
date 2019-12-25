import Glide from '@glidejs/glide'

const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function(){
  console.log(document.documentElement.clientWidth);

  var primarySlider = document.querySelector('.main-slider__primary-slider');
  if (!primarySlider) {
    return;
  }

  var primarySlider = new Glide('.main-slider__primary-slider', {
    type: 'carousel',
    perView: 1,
    gap: 0,
    // animationTimingFunc: 'linear',
    //peek: {before: '0', arter: '428'},
    breakpoints: {
      1279: {
      }
    }
  });

  primarySlider.mount();

  var secondSlider = new Glide('.main-slider__second-slider', {
    type: 'carousel',
    perView: 1,
    gap: 0,
    //peek: {before: '0', arter: '428'},
    breakpoints: {
      1279: {
      }
    }
  });

  secondSlider.on('run.before', function() {
    console.log(secondSlider.index);
  })

  secondSlider.mount();

  var arrows = document.querySelector('.main-slider__arrows');
  sliderArrows(arrows, [primarySlider,secondSlider]);


  //Стрелки слайдера навигации по моделям
  // index - текущий слайдер типа
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

  //Смена слайда по клику по нему
  function modelNavFocusOnClick(index) {
      for (let j = 0; j < modelNavArr[index].items.length; j++) {
        modelNavArr[index].items[j].addEventListener("click", function(event) {
          modelNavArr[index].glide.go ('=' + this.dataset.index);
        });
      };
  }


}); //ready



  //Переход к слайду по клику  - общая функция
  // slidesElem - .glide__slides DOM element
  // sliderGlide - slider Glide object
  // self - current slide DOM element - .glide__slide
  // selfIndex - number of current slide Dom element in slides collection (parentElement.children)

  function goToSlide(slidesElem, sliderGlide, self, selfIndex) {
    console.log(self);
    event.preventDefault();
    var move = '';

    var slides = slidesElem.children;

    for (let j=0; j < slides.length; j++) {
      if ( slides[j].classList.contains('glide__slide--active') ) {
        var activeIndex = j;
        var activeSlide = slides[j];
        break;
      }
    };
    console.log('activeIndex: ' + activeIndex);
    console.log(activeSlide);

    console.log('selfIndex: ' + selfIndex);


    if (self.classList.contains('glide__slide--clone')) {
      if (selfIndex < activeIndex) {
        move = '<';
        for (let j=1; j<=(activeIndex - selfIndex); j++) {
          sliderGlide.go(move);
        }
      }
      else if (selfIndex > activeIndex) {
        move = '>';
        for (let j=1; j<=(selfIndex - activeIndex); j++) {
          sliderGlide.go(move);
        }
      }
    }
    else {
      sliderGlide.go('=' + self.dataset.index);
    }

  };


  //Переход к слайду по клику для внутреннего слайдера (обработка клонированных слайдов)

  function sliderItemClick(event, slider, self, i, curIndex) {
    console.log('sliderItemClick: ' + i);
    console.log(slider);
    event.preventDefault();
    var move = '';
    console.log('activeIndex: ' + activeIndex);


    for (let j=0; j < typeSliders[i].items.length; j++) {
      if ( typeSliders[i].items[j].classList.contains('glide__slide--active') ) {
        var activeIndex = j;
        var activeSlide = typeSliders[i].items[j];
        break;
      }
    };
    console.log('activeIndex2: ' + activeIndex);
    console.log('curIndex: ' + curIndex);

    console.log(self);

    if (self.classList.contains('glide__slide--clone')) {
      if (curIndex < activeIndex) {
        move = '<';
        for (let j=1; j<=(activeIndex - curIndex); j++) {
          typeSliders[i].glide.go(move);
        }
      }
      else if (curIndex > activeIndex) {
        move = '>';
        console.log('2');
        for (let j=1; j<=(curIndex - activeIndex); j++) {
          console.log('2 move');
          typeSliders[i].glide.go(move);
        }
      }
    }
    else {
      typeSliders[i].glide.go('=' + self.dataset.index);
    }

  };



 //Переход к слайду по клику  для слайдера моделей !!!Переделать !!!(обработка клонированных слайдов)

  function makeTypeSliderItems(slider, i) {

    console.log('makeTypeSliderItems: ' + i);

      if (typeof typeSliders[i].items == 'undefined') {
        typeSliders[i].items = slider.querySelector(".glide__slides").children;
      }
      console.log(typeSliders[i].items);

    for (let j = 0; j < typeSliders[i].items.length; j++) {
      typeSliders[i].items[j].addEventListener("click", function(event) {
        console.log('click: ' + j);
        sliderItemClick(event, typeSliders[i].glide, this, i, j);
      } );
    };
  }
