//operation functions

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Error" : a / b;

//variables

let displayValue = "";
let firstNumber = null;
let currentOperator = null;
let isResultDisplayed = false;


function updateDisplay() {
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

function handleOperatorClick(operator) {
    if (isResultDisplayed) {   
        isResultDisplayed = false;
    } else if (currentOperator) {
        calculate();
    } else {
        firstNumber = parseFloat(displayValue);
    };

    if (["+", "-", "*", "/"].includes(displayValue.slice(-1))) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    };
    currentOperator = operator;
    
    updateDisplay();
};

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
    secondNumber = null;
    currentOperator = null;
    isResultDisplayed = false;
    updateDisplay();
}

const clearButton = document.querySelector('.btn.clear');
clearButton.addEventListener('click', handleClearClick); 