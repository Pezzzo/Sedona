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

imgContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('photo-content__img')) {
    modal.classList.add('shown');
    html.classList.add('page--modal-open');
  }
});


html.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('photo-content__img')) {
    return;
  }
  modal.classList.remove('shown');
  html.classList.remove('page--modal-open');
});
