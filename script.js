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

function operate(calcOperator, calcfirstNumber, calcsecondNumber) { // consider reordering
    return calcOperator(calcfirstNumber, calcsecondNumber);
}

// Display value logic

let displayValue = "0";
const display = document.querySelector(".display_numbers");
const buttons = document.querySelectorAll(".button");


buttons.forEach((button) => {

    button.addEventListener("click", () => {
    
        if (button.classList.contains("number")) {
            displayValue += button.id;
            display.textContent = displayValue;
        }; 
            
    };
});