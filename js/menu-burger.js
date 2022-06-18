const navMain = document.querySelector('.header-menu');
const navToggle = document.querySelector('.button-burger');

navMain.classList.remove('header-menu--nojs');
// бургер
navToggle.addEventListener('click', () => {
  navMain.classList.toggle('header-menu--closed');
  navToggle.classList.toggle('button-burger--menu');
  navToggle.classList.toggle('button-burger--close-menu');
});
