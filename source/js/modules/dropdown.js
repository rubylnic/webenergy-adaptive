'use strict';
(function () {
  var openButton = document.querySelector('.main-nav__item');
  var dropdown = document.querySelector('.main-nav__catalog');
  openButton.addEventListener('click', function () {
    dropdown.classList.toggle('main-nav__catalog--hidden');
    dropdown.classList.toggle('main-nav__catalog--animation')
  })
}
  ());
