'use strict';

const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-popup__img');
const imgContainer = document.querySelector('.photo-gallery');
const html = document.querySelector('.page');
const closeModalButton = document.querySelector('.modal-popup__close-button');
const imgContent = document.querySelectorAll('.photo-content__img');
// const imgPopup = document.querySelector('.modal-popup__img');



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
const renderModalImg = (evt) => {
  const arrowBack = evt.target.closest('.modal-popup__arrow-back');
  const arrowforward = evt.target.closest('.modal-popup__arrow-forward');

  if (arrowforward) {
    for (let i = 0; i < imgContent.length; i++) {
      if (i === imgContent.length-1) {
        return
      }
      if (imgContent[i].src === modalImg.src) {
        modalImg.src = imgContent[i+=1].src
      }
    }
  }
  if (arrowBack) {
    for (let i = 1; i < imgContent.length; i++) {
      if (imgContent[i].src === modalImg.src) {
        modalImg.src = imgContent[i-=1].src
      }
    }
  }
};

// открытие и закрытие попапа
const openModalHandler = (evt) => {
  const img = evt.target.closest('img');

  if (img) {
    modal.classList.add('shown');
    html.classList.add('page--modal-open');
    disableScrolling();
  }
  modalImg.src = img.src;
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
  window.addEventListener('keydown', closeModalKeyHandler);
  modal.addEventListener('click', (renderModalImg));
}

popap();
