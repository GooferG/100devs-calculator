let runningTotal = 0; // total calculation
let buffer = '0'; // keep track of user input
let previousOperator; // what was pressed previously (to display the appropriate result)

document.querySelector('.calc-buttons').addEventListener('click', (event) => {
  buttonClick(event.target.innerText);
});

function buttonClick(value) {
  // function to handle the button clicks
  if (isNaN(parseInt(value))) {
    handleSymbol(value); // function will handle if the button is a symbol
  } else {
    handleNumber(value); // function will handle if the button is a number
  }
}

function handleNumber(value) {
  // will ensure to overwrite the buffer
  if (buffer === '0') {
    buffer = value;
  } else {
    buffer += value;
  }
  rerender();
}

function handleSymbol(value) {
  if (buffer === '/') {
    buffer / value;
  }
}

function rerender() {
  screen.innerText = buffer;
}

const screen = document.querySelector('.calc-screen');

const clear = document
  .getElementById('=')
  .addEventListener('click', () => (screen.innerText = '0'));
