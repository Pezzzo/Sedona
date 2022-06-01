'use strict';

const images = [
  'photo-1.jpg',
  'photo-2-desktop.jpg',
  'photo-3-desktop.jpg',
  'photo-4-desktop.jpg',
];


const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-popup__img');
const imgContainer = document.querySelector('.photo-gallery');
const html = document.querySelector('.page');
const closeModalButton = document.querySelector('.modal-popup__close-button');
// const imgContent = document.querySelectorAll('.photo-content__img');

// состояние скролла
const disableScrolling = () => {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
};

const enableScrolling = () => {
  window.onscroll=function(){};
};

// рендер
// const renderModal = () => {

// }

modal.addEventListener('click', (evt) => {
  const arrow = evt.target.closest('.arrow');
  if (arrow) {
    console.log('qwqwqw')
  }
});

// открытие и закрытие попапа
const openModalHandler = (evt) => {
  const img = evt.target.closest('img');

  if (img) {
    modal.classList.add('shown');
    html.classList.add('page--modal-open');
    disableScrolling();
  }
  modalImg.src = `img/${images[1]}`;
  // modalImg.src = imgContent.src;


};

const closeModalMouseHandler = (evt) => {
  if (evt.target.classList.contains('photo-content__img')) {
    return;
  }
  modal.classList.remove('shown');
  html.classList.remove('page--modal-open');
  enableScrolling();
};

const closeModalKeyHandler = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
      evt.preventDefault();
      modal.classList.remove('shown');
      html.classList.remove('page--modal-open');
      enableScrolling();
  }
};





const popap = () => {
  imgContainer.addEventListener('click', openModalHandler);
  closeModalButton.addEventListener('click', closeModalMouseHandler);
  window.addEventListener('keydown', closeModalKeyHandler)
}

popap();
