'use strict';
// console.log(`linked`);

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
