// Declare functions for all of the basic math operators

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Initialize variables for two numbers and an operator

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

// Declare calculator function

function operate(calcOperator, calcfirstNumber, calcsecondNumber) {
    return calcOperator(calcfirstNumber, calcsecondNumber);
}

// Display value logic

let displayValue = "0";

// Write value of displayValue to the display

// Update variable displayValue based on clicks

const numberButtons = document.querySelectorAll(".button.number");

numberButtons.forEach((numberButton) => {

    numberButton.addEventListener("click", () => {
    
        displayValue += numberButton.id;
    
    });

});