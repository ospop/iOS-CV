'use strict';
// console.log(`linked`);

const tryBtn = document.getElementById('try--btn');
const linkedIn = document.getElementById('linkedin');
const gitHub = document.getElementById('github');
const switchBtn = document.querySelectorAll('.see--more--btn');
const cardSkills1 = document.querySelector('.card--skills');
const cardSkills2 = document.querySelector('.card--skills-2');

const cardSwitch = function () {
  cardSkills1.classList.toggle('card--hidden');
  cardSkills2.classList.toggle('card--hidden');
};

const showLess = function () {
  xpCard.classList.toggle('folded');
};

switchBtn[0].addEventListener('click', cardSwitch);
switchBtn[1].addEventListener('click', cardSwitch);

tryBtn.addEventListener('click', () => {
  window.open('mailto:dragos042@icloud.com');
});

linkedIn.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/dragos-popescu-85a0921ab/');
});

gitHub.addEventListener('click', () => {
  window.open('https://github.com/ospop');
});

let today = new Date();

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

let hours = addZero(today.getHours());
let minutes = addZero(today.getMinutes());
let currentTime = `${hours}:${minutes}`;

document.getElementById('time').innerHTML = currentTime;
