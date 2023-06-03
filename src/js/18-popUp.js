const submitBtnEl = document.querySelector('.submitBtn');
const okBtn = document.querySelector('.okBtn');
const popUpEl = document.querySelector('.pop-up');

submitBtnEl.addEventListener('click', () => {
  popUpEl.classList.add('pop-up-open');
});

okBtn.addEventListener('click', () => {
  popUpEl.classList.remove('pop-up-open');
});
