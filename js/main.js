const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const buttonDivison = document.getElementById('/');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');

const screen = document.querySelector('.calc-screen');

let runningTotal = 0;
let buffer = '0';
let previousOperator;

button7.addEventListener('click', function () {
  screen.innerText += '7';
});

const clear = document
  .getElementById('=')
  .addEventListener('click', () => (screen.innerText = '0'));
