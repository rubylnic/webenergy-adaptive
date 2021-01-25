'use strict';
(function() {
  var button = document.querySelector('.main-nav__button');
  var nav = document.querySelector('.main-nav__list');

  var openClose = function() {
    nav.classList.toggle('main-nav__list--closed');
    button.classList.toggle('main-nav__button--cross');
  };

  button.addEventListener('click', openClose);
})();
