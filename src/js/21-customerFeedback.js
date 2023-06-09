const emojisEl = document.querySelector('.emojis');
const starsEl = document.querySelectorAll('.fa-solid');
const ratingNamesEl = document.querySelector('.names');

starsEl[0].addEventListener('click', () => {
  starsEl[0].style.color = 'gold';
  starsEl[1].style.color = 'black';
  starsEl[2].style.color = 'black';
  starsEl[3].style.color = 'black';
  starsEl[4].style.color = 'black';

  emojisEl.style.transform = 'translateX(180px)';
  ratingNamesEl.style.transform = 'translateY(80px)';
});

starsEl[1].addEventListener('click', () => {
  starsEl[0].style.color = 'gold';
  starsEl[1].style.color = 'gold';
  starsEl[2].style.color = 'black';
  starsEl[3].style.color = 'black';
  starsEl[4].style.color = 'black';

  emojisEl.style.transform = 'translateX(90px)';
  ratingNamesEl.style.transform = 'translateY(40px)';
});

starsEl[2].addEventListener('click', () => {
  starsEl[0].style.color = 'gold';
  starsEl[1].style.color = 'gold';
  starsEl[2].style.color = 'gold';
  starsEl[3].style.color = 'black';
  starsEl[4].style.color = 'black';

  emojisEl.style.transform = 'translateX(0px)';
  ratingNamesEl.style.transform = 'translateY(0px)';
});

starsEl[3].addEventListener('click', () => {
  starsEl[0].style.color = 'gold';
  starsEl[1].style.color = 'gold';
  starsEl[2].style.color = 'gold';
  starsEl[3].style.color = 'gold';
  starsEl[4].style.color = 'black';

  emojisEl.style.transform = 'translateX(-90px)';
  ratingNamesEl.style.transform = 'translateY(-40px)';
});

starsEl[4].addEventListener('click', () => {
  starsEl[0].style.color = 'gold';
  starsEl[1].style.color = 'gold';
  starsEl[2].style.color = 'gold';
  starsEl[3].style.color = 'gold';
  starsEl[4].style.color = 'gold';

  emojisEl.style.transform = 'translateX(-180px)';
  ratingNamesEl.style.transform = 'translateY(-80px)';
});

let docTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'come Back ;(';
});

window.addEventListener('focus', () => {
  document.title = docTitle;
});
