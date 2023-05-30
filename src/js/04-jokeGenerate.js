// const leftBtn = document.querySelector('.btn-left');
// const rightBtn = document.querySelector('.btn-right');
// const buttons = document.querySelector('.btn');
// const imageEl = document.querySelector('.images');

// let pictures = ['1', '2', '3', '4', '5', '6'];

// let count = 0;

// leftBtn.addEventListener('click', left);
// rightBtn.addEventListener('click', right);

// function right() {
//   count++;
//   if (count > pictures.length - 1) {
//     count = 0;
//   }
//   imageEl.style.background = `url("../images/${pictures[count]}.jpg")`;
// }

// function left() {
//   count--;
//   if (count > 0) {
//     count = pictures.length - 1;
//   }
//   imageEl.style.background = `url("../images/${pictures[count]}.jpg")`;
// }

const btnEl = document.querySelector('.btn');
const jokeEL = document.querySelector('.joke');

const URL = 'http://v2.jokeapi.dev/joke/Any?type=single&amount=1';

btnEl.addEventListener('click', getMethod);

async function getMethod() {
  jokeEL.classList.remove('fade');

  const data = await fetch(URL).then(e => e.json());

  if (data) {
    console.log(data);
    jokeEL.innerHTML = data.joke;
    jokeEL.classList.add('fade');
  }
}
