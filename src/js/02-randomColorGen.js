const bntEl = document.querySelector('.button');
console.log(bntEl);
const bodyEl = document.querySelector('body');

const colors = ['green', 'blue', 'yellow', 'azur', 'violet', 'red', 'orange'];

bodyEl.style.background = 'pink';

bntEl.addEventListener('click', addColor);

function addColor() {
  const color = parseInt(Math.random() * colors.length);
  bodyEl.style.background = colors[color];
}
