const display =document.getElementById('display');

function appendCharacter(character) {
  if (display.innerText === '0') {
    display.innerText = character;
  } else {
    display.innerText += character;
  }
}

function calculateRoot() {
  const currentValue = parseFloat(display.innerText);
  display.innerText = Math.sqrt(currentValue);
}

function clearEntry() {
  let currentText = display.innerText;

  if (currentText.length > 0) {
    display.innerText = currentText.slice(0,-1)
  }

  if (display.innerText === '') {
    display.innerText = '0';
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText.replace('x', '*'))
  } catch (e) {
    display.innerText = 'Error';
  }
}

  