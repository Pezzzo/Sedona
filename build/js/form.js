const modalPopupFailure = document.querySelector('.modal-popup--failure');
const modalPopupSuccess = document.querySelector('.modal-popup--success');
const modalPopupSuccessClose = document.querySelector('.modal-popup__button--success');
const modalPopupFailureClose = document.querySelector('.modal-popup__button--failure');
const form = document.querySelector('.feedback-form');

// валидация формы (попапы)
form.addEventListener('invalid', (evt) => {
  modalPopupFailure.classList.remove('modal-popup--none');
  if (evt.target) {
    evt.target.style.border = '2px solid red';
  }
},  true);

form.addEventListener('change', (evt) => {
  if (evt.target) {
    evt.target.style.border = 'none';
  }
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  modalPopupSuccess.classList.remove('modal-popup--none');
});

modalPopupSuccessClose.addEventListener('click', () => {
  modalPopupSuccess.classList.add('modal-popup--none');
});

modalPopupFailureClose.addEventListener('click', () => {
  modalPopupFailure.classList.add('modal-popup--none');
});
