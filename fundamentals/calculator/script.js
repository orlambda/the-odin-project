// TODO: organise current number into a class
// TODO (optional): store number as linked list to allow long numbers
// Current number is the operand we are reading
// Digits are stored separately to sign and decimal places
let currentNumber_DigitsOnly = 0;
let processingDecimal = false;
let decimalPlacesAdded = 0;
let currentNumberIsNegative = false;
// Return actual value of current number as signed float
function interpretNumber(n) {
    n = n / 10 ** (decimalPlacesAdded);
    if (currentNumberIsNegative) {
        return -n;
    }
    return n;
}

// Operands we have finished reading
let operandA = 0;
let operandB = 0;

// Undefined operator means we are reading operandA else operandB
let operator = undefined;
function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "ERROR - unknown operator (expecting [+-*/]";
    }    
}
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
    if (b === 0) {
        zeroError();
        return;
    }
    return a / b;
}

let result = undefined;
// If we've just calculated (using "="), reading a digit starts a new expression
let justCalculated = false;

resetDisplay();
enableKeys();

function enableKeys() {
    const keys = document.querySelectorAll(".buttons button")
    Array.from(keys).forEach((key) => {
        key.addEventListener('click', (e) => {
            processInput(key.id);
        });
    });
}

function processInput(c) {
    console.log(`key pressed: ${c}`);
    if (Number.isInteger(parseInt(c))) {
        console.log("found a number!");
        processDigitInput(c);        
    } else {
        console.log("found an operator!");
        processOperatorInput(c);
    }
}

function processDigitInput(c) {
    if (!processingDecimal) {
        currentNumber_DigitsOnly = (currentNumber_DigitsOnly * 10) + parseInt(c);
        console.log(currentNumber_DigitsOnly);
        console.log(interpretNumber(currentNumber_DigitsOnly));
    } else {    
        decimalPlacesAdded++;
        currentNumber_DigitsOnly = (currentNumber_DigitsOnly * 10) + parseInt(c);

        // currentNumber *= 10 ** (decimalPlacesAdded);
        // currentNumber += parseInt(c);
        // currentNumber /= 10 ** (decimalPlacesAdded);

        // currentNumber = currentNumber + +(parseInt(c) / (10 ** (decimalPlacesAdded))).toFixed(decimalPlacesAdded);
        console.log(currentNumber_DigitsOnly);
        console.log(interpretNumber(currentNumber_DigitsOnly));  
    }
    updateDisplay(formatNumber(interpretNumber(currentNumber_DigitsOnly)));
}

function processOperatorInput(c) {
    if (c === ".") {
        if (processingDecimal) {
            return;
        } else {
            processingDecimal = true;
            updateDisplay(`${formatNumber(interpretNumber(currentNumber_DigitsOnly))}.`);
        }
    } else {
        updateDisplay(c);
    }

}

// Format current number for display
function formatNumber(n) {
    return n.toFixed(decimalPlacesAdded);
}
function resetDisplay() {
    updateDisplay(0);
}
function updateDisplay(value) {
    const display = document.querySelector(".display");
    display.textContent = value;
}

// const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "*", "=", ".", "C"];
// keys.forEach((key) => {
//     const div = document.createElement("button");
//     div.setAttribute('id', key);
//     div.innerText = `${key}`;
//     const main = document.querySelector(".main");
//     main.appendChild(div);
// });