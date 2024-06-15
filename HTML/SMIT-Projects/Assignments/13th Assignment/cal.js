let display = document.getElementById("display");
let currentInput = "0";
let operator = null;
let previousInput = null;
let dotExist = false;
let isPower = false;

function updateDisplay() {
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  dotExist = false;
  isPower = false;
  updateDisplay();
}

function removeLastDigit() {
  if (currentInput.length > 1) {
    if (currentInput.endsWith(".")) {
      dotExist = false;
    }
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

function appendNumber(num) {
  if (currentInput === "0" && num !== ".") {
    currentInput = num;
  } else if (num === "." && !dotExist) {
    dotExist = true;
    currentInput += num;
  } else if (num !== ".") {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== null && !isPower) {
    calculateResult();
  }
  previousInput = currentInput;
  operator = op;
  currentInput = "0";
  dotExist = false;
  isPower = false;
  updateDisplay();
}

function calculateResult() {
  if (operator && previousInput !== null) {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        result = prev / curr;
        break;
      case "%":
        result = prev % curr;
        break;
      case "^":
        result = Math.pow(prev, curr);
        break;
      default:
        return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = null;
    dotExist = currentInput.includes(".");
    updateDisplay();
  }
}

function calculateSquareRoot() {
  currentInput = Math.sqrt(parseFloat(currentInput)).toString();
  updateDisplay();
}

function calculatePower() {
  if (!isPower) {
    previousInput = currentInput;
    operator = "^";
    currentInput = "0";
    isPower = true;
    updateDisplay();
  } else {
    currentInput = Math.pow(
      parseFloat(previousInput),
      parseFloat(currentInput)
    ).toString();
    operator = null;
    previousInput = null;
    dotExist = currentInput.includes(".");
    isPower = false;
    updateDisplay();
  }
}

function calculateSin() {
  currentInput = Math.sin(
    (parseFloat(currentInput) * Math.PI) / 180
  ).toString();
  updateDisplay();
}

function calculateCos() {
  currentInput = Math.cos(
    (parseFloat(currentInput) * Math.PI) / 180
  ).toString();
  updateDisplay();
}

function calculateTan() {
  currentInput = Math.tan(
    (parseFloat(currentInput) * Math.PI) / 180
  ).toString();
  updateDisplay();
}

function calculateLog() {
  currentInput = Math.log10(parseFloat(currentInput)).toString();
  updateDisplay();
}

function calculateExp() {
  currentInput = Math.exp(parseFloat(currentInput)).toString();
  updateDisplay();
}

function calculatePi() {
  currentInput = Math.PI.toString();
  updateDisplay();
}

function calculateFactorial() {
  let number = parseInt(currentInput);
  if (number === 0 || number === 1) {
    currentInput = "1";
  } else {
    let fact = 1;
    for (let i = number; i > 1; i--) {
      fact *= i;
    }
    currentInput = fact.toString();
  }
  updateDisplay();
}

function showScientific() {
  document.getElementById("basic-buttons").style.display = "none";
  document.getElementById("scientific-buttons").style.display = "grid";
}

function showBasic() {
  document.getElementById("basic-buttons").style.display = "grid";
  document.getElementById("scientific-buttons").style.display = "none";
}
