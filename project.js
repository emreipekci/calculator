//operation functions

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Error" : a / b;
const percentageOf = (a, b) => (a * b) / 100;

//variables

let displayValue = "";
let firstNumber = null;
let currentOperator = null;
let isResultDisplayed = false;


function updateDisplay() {
    if (displayValue.length > 23 || displayValue === Infinity) {
        handleClearClick();
    }
    const displayElement = document.querySelector(".display");
    displayElement.textContent = displayValue;   
};


function handleNumberClick(number) {

    if (isResultDisplayed) {
        displayValue = number;
        isResultDisplayed = false;
    } else if (displayValue === "0") {
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

function handleDecimalClick() {
    if (!displayValue.includes(".")) {
        displayValue += ".";
        updateDisplay();
    }
};

const decimalButton = document.querySelector(".btn.decimal");
decimalButton.addEventListener("click", handleDecimalClick);



function handleOperatorClick(operator) {
    if (isResultDisplayed) {   
        isResultDisplayed = false;
    } 

    if (currentOperator) {
        if (!displayValue.slice(-1).match(/[0-9.]/)) {
            displayValue = displayValue.slice(0, -1) + operator;

        } else { 
            calculate();
            firstNumber = parseFloat(displayValue);
            displayValue += operator;
        }
    } else {
        firstNumber = parseFloat(displayValue);
        displayValue += operator;
    }

    updateDisplay();
    currentOperator = operator;
}

const operatorButtons = document.querySelectorAll(".btn.operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        handleOperatorClick(button.textContent);
    });
});

function calculate() {
    const secondNumber = parseFloat(displayValue.split(currentOperator).pop());
    firstNumber = operate(currentOperator, firstNumber, secondNumber);
    displayValue = firstNumber.toString();
};

function operate(operator, a, b) {     
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b); 
    } else if (operator === "%") {
        return percentageOf(a, b);
    } else {
        return "Invalid operator";
    }
}; 

function handleEqualClick() {
    if (currentOperator && firstNumber !== null) {
        calculate();
        updateDisplay();
        isResultDisplayed = true; 
        currentOperator = null;  
    }
};

const equalButton = document.querySelector('.btn.equal');
equalButton.addEventListener('click', handleEqualClick);

function handleClearClick() {
    displayValue = '0';
    firstNumber = null;
    currentOperator = null;
    isResultDisplayed = false;
    updateDisplay();
}

const clearButton = document.querySelector('.btn.clear');
clearButton.addEventListener('click', handleClearClick); 

function handleBackspaceClick() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0'; 
    }
    updateDisplay();
};

const backspaceButton = document.querySelector('.btn.backspace');
backspaceButton.addEventListener('click', handleBackspaceClick);

function handleButtonPress(event) {
    event.target.classList.add("active");
}

function handleButtonRelease(event) {
    event.target.classList.remove("active");
}

const allButtons = document.querySelectorAll(".btn");
allButtons.forEach(button => {
    button.addEventListener("mousedown", handleButtonPress);
    button.addEventListener("mouseup", handleButtonRelease);
    button.addEventListener("mouseleave", handleButtonRelease);
});