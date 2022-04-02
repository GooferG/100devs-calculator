let runningTotal = 0; // total calculation
let buffer = '0'; // keep track of user input
let previousOperator = null; // what was pressed previously (to display the appropriate result)
const screen = document.querySelector('.calc-screen');

document.querySelector('.calc-buttons').addEventListener('click', (event) => {
  buttonClick(event.target.innerText);
}); // way to select the button by the innerText (avoiding creating multiple querySelectors)

function buttonClick(value) {
  // to handle the button clicks
  if (isNaN(parseInt(value))) {
    handleSymbol(value); // function will handle if the button is a symbol
  } else {
    handleNumber(value); // function will handle if the button is a number
  }
}

function handleNumber(value) {
  // to ensure to overwrite the buffer
  if (buffer === '0') {
    // if buffer doesn't change, keep it as 0
    buffer = value;
  } else {
    buffer += value; // otherwise add value to buffer
  }
  rerender();
}

function flushOperation(intBuffer) {
  // to produce the operations (-+/*)
  if (previousOperator === '+') {
    runningTotal += intBuffer;
  } else if (previousOperator === '-') {
    runningTotal -= intBuffer;
  } else if (previousOperator === '*') {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleSymbol(value) {
  switch (value) {
    case 'C':
      buffer = '0';
      runningTotal = 0;
      previousOperator = null;
      break;
    case '=':
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = '' + runningTotal;
      runningTotal = 0;
      break;
  }
  rerender();
}

function handleMath(value) {
  if (buffer === '0') {
    return;
  }
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;

  buffer = 0;
}

function rerender() {
  // to put the buffer number on screen
  screen.innerText = buffer;
}

// const clear = document
//   .getElementById('=')
//   .addEventListener('click', () => (screen.innerText = '0'));
