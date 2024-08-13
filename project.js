//operation functions

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Error" : a / b;

//variables

let displayValue = "";
let firstNumber = null;
let currentOperator = null;


function updateDisplay() {
    const displayElement = document.querySelector(".display");
    displayElement.textContent = displayValue;
};


function handleNumberClick(number) {
    // If the current display is '0', replace it with the clicked number
    if (displayValue === "0") {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
};

const numberButtons = document.querySelectorAll('.btn.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleNumberClick(button.textContent);
    });
});

function handleOperatorClick(operator) {
    if (firstNumber === null) {
        firstNumber = parseFloat(displayValue);
    } else if (currentOperator) {
        const secondNumber = parseFloat(displayValue.split(currentOperator).pop());
        firstNumber = operate(currentOperator, firstNumber, secondNumber);
        displayValue = firstNumber.toString();
    }
    currentOperator = operator;
    displayValue += operator;  // Reset display for next number
    updateDisplay();
};

const operatorButtons = document.querySelectorAll(".btn.operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        handleOperatorClick(button.textContent);
    });
});

function operate(operator, a, b) {     
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else {
        return "Invalid operator";
    }
}; 

/*
function handleEqualClick() {
    if (currentOperator && firstNumber !== null) {
        secondNumber = parseFloat(displayValue);
        displayValue = operate(currentOperator, firstNumber, secondNumber).toString();
        firstNumber = null; // Reset for next calculation
        currentOperator = null;
        updateDisplay();
    }
}



function handleClearClick() {
    displayValue = '0';
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    updateDisplay();
}








const equalButton = document.querySelector('.btn.equal');
equalButton.addEventListener('click', handleEqualClick);

const clearButton = document.querySelector('.btn.clear');
clearButton.addEventListener('click', handleClearClick); */