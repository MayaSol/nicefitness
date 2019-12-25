import Glide from '@glidejs/glide'

const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function(){
  console.log(document.documentElement.clientWidth);

  var mainSlider = document.querySelector('.main-slider__slider');
  if (!mainSlider) {
    return;
  }

  var mainSlider = new Glide('.main-slider__slider', {
    type: 'carousel',
    perView: 1,
    gap: 0,
    bound: true,
    peek: { before: 0, after: 426 },
    breakpoints: {
      1279: {
        peek: { before: 0, after: 426 }
      }
    }
  });

  mainSlider.mount();

  var arrows = document.querySelector('.main-slider__arrows');
  sliderArrows(arrows, mainSlider);


  //Стрелки слайдера навигации по моделям
  // index - текущий слайдер типа
  function sliderArrows(arrowsElem,slider) {
    arrowsElem.querySelector('.btn--slider-next').addEventListener("click", function(event) {
      slider.go('>');
    });

    arrowsElem.querySelector('.btn--slider-prev').addEventListener("click", function(event) {
      slider.go('<');
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
