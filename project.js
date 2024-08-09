const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(array) {
    return array.reduce((product, current) => product * current)
};

const divide = function(array) {
    return array.reduce((product, current) => product / current)
};

var numbers = [0,1,2,3,4,5,6,7,8,9];
var firstNumber;
var secondNumber;
var operators = ["+", "-", "*", "/"];
var operator;

function operate(firstNumber, secondNumber, operator) {
    let result;
    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        result = firstNumber / secondNumber;
    } else {
        result = "Invalid operator";
    }
    return result;
};
