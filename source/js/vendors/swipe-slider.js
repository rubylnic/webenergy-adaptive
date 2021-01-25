'use strict';
(function() {

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '.new__controls-btn-right',
      prevEl: '.new__controls-btn-left',
    },

    slidesPerView: 4,
    spaceBetween: 32,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      750: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      980: {
        slidesPerView: 4,
        spaceBetween: 32
      },
    }
  })
})();
