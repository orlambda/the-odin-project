const maxDigitsOnDisplay = 15;

// TODO (optional): store number as linked list to allow long numbers
// or use library for precise calculation
// Current number is the operand we are reading
// Digits are stored separately to sign and decimal places
class Operand {
    constructor() {
        this.number_DigitsOnly = 0;
        this.processingDecimal = false;
        this.decimalPlacesAdded = 0;
        this.negative = false;
    }
    value() {
        let n = this.number_DigitsOnly / 10 ** (this.decimalPlacesAdded);
        if (this.negative) {
            return -n;
        }
        return n;
    }
}

// 0 means operand a, 1 means operand b, -1 means operator
let lastProcessed = 0;

// Return actual value of current number as signed float
function interpretNumber(n) {
    n = n / 10 ** (currentOperand.decimalPlacesAdded);
    if (currentOperand.negative) {
        return -n;
    }
    return n;
}

// Currently reading
let currentOperand = new Operand();

// Operands we have finished reading
let operandA = 0;
let operandB = 0;

let result = undefined;
// If we've just calculated (using "="), reading a digit starts a new expression
let justCalculated = false;

// Undefined operator means we are reading operandA else operandB
let operator = undefined;

function resetCalculator() {
    currentOperand = new Operand();
    operator = undefined;
    justCalculated = false;
    result = undefined;
    operandA = 0;
    operandB = 0;
    lastProcessed = 0;
}

resetDisplay();
enableKeys();

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
    if (lastProcessed === -1) {
        lastProcessed = 1;
    }
    if (!currentOperand.processingDecimal) {
        currentOperand.number_DigitsOnly = (currentOperand.number_DigitsOnly * 10) + parseInt(c);
        console.log(currentOperand.number_DigitsOnly);
        console.log(interpretNumber(currentOperand.number_DigitsOnly));
        console.log(currentOperand.value());
    } else {    
        currentOperand.decimalPlacesAdded++;
        currentOperand.number_DigitsOnly = (currentOperand.number_DigitsOnly * 10) + parseInt(c);

        console.log(currentOperand.number_DigitsOnly);
        console.log(interpretNumber(currentOperand.number_DigitsOnly));
        console.log(currentOperand.value());  
    }
    updateDisplay(formatNumber(interpretNumber(currentOperand.number_DigitsOnly), currentOperand.decimalPlacesAdded));
}

function processOperatorInput(c) {
    if (c === ".") {
        processDecimalPoint();
        return;
    }
    if (c === "=") {
        evaluate();
        justCalculated = true;
        return;
    }
    if (c === "C") {
        resetCalculator();
        resetDisplay();
        return;
    }
    switch (lastProcessed) {
        case 0:
            lastProcessed = -1;
            operator = c;
            operandA = currentOperand.value();
            currentOperand = new Operand();
            updateDisplay(c);
            break;
        case 1:
            evaluate();
            lastProcessed = -1;
            operator = c;
            operandA = result;
            currentOperand = new Operand();
            break;
        case -1:
            break;
        default:
            updateDisplay(`ERROR: lastProcessed: ${lastProcessed}`);
            return;
    }
}

// Format current number for display
function formatNumber(n, decimalPlaces) {
    let output = n.toFixed(decimalPlaces);
    if (output.length > maxDigitsOnDisplay) {
        output = n.toExponential(12);
    }
    if (output.length > maxDigitsOnDisplay) {
        output = n.toExponential(11);
    }
    return output;
}
function resetDisplay() {
    updateDisplay(0);
}
function updateDisplay(value) {
    const display = document.querySelector(".display");
    display.textContent = value;
}

function processDecimalPoint() {
    if (currentOperand.processingDecimal) {
        return;
    } else {
        currentOperand.processingDecimal = true;
        updateDisplay(
            `${formatNumber(interpretNumber(currentOperand.number_DigitsOnly),
                currentOperand.decimalPlacesAdded)}.`);
        return;
    }
}

function evaluate() {
    console.log("Evaluating");
    if (lastProcessed === -1) {
        console.log("Last processed operator.");
        return;
    }
    if (lastProcessed === 0) {
        console.log("Last processed operandA.");
        return;
    }
    if (operandB === undefined || operator === undefined) {
        console.log(`Error: operandA: ${operandA}, operandB: ${operandB}, operator: ${operator}`);
        return;
    }
    operandB = currentOperand.value();
    result = calculate(operandA, operator, operandB);
    updateDisplay(result);
    return;
}

// const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "*", "=", ".", "C"];
// keys.forEach((key) => {
//     const div = document.createElement("button");
//     div.setAttribute('id', key);
//     div.innerText = `${key}`;
//     const main = document.querySelector(".main");
//     main.appendChild(div);
// });