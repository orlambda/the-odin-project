// const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "*", "=", ".", "C"];
// keys.forEach((key) => {
//     const div = document.createElement("button");
//     div.setAttribute('id', key);
//     div.innerText = `${key}`;
//     const main = document.querySelector(".main");
//     main.appendChild(div);
// });

let currentOperand = 0;
let currentNumber = 0;
let processingDecimal = false;
let decimalPlacesAdded = 0;
let operandA = 0;
let operandB = 0;
let operator = undefined;
let result = undefined;

updateDisplay(0);

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
        processNumber(c);        
    } else {
        console.log("found an operator!");
        processOperator(c);
    }
}

function processNumber(c) {
    if (!processingDecimal) {
        currentNumber = (currentNumber * 10) + parseInt(c);
        console.log(currentNumber);
        console.log(interpretNumber(currentNumber));
    } else {    
        decimalPlacesAdded++;
        currentNumber = (currentNumber * 10) + parseInt(c);

        // currentNumber *= 10 ** (decimalPlacesAdded);
        // currentNumber += parseInt(c);
        // currentNumber /= 10 ** (decimalPlacesAdded);

        // currentNumber = currentNumber + +(parseInt(c) / (10 ** (decimalPlacesAdded))).toFixed(decimalPlacesAdded);
        console.log(currentNumber);
        console.log(interpretNumber(currentNumber));  
    }
    updateDisplay(formatNumber(interpretNumber(currentNumber)));
}

function interpretNumber(n) {
    return n / 10 ** (decimalPlacesAdded);
}

function formatNumber(n) {
    return n.toFixed(decimalPlacesAdded);
}

function processOperator(c) {
    if (c === ".") {
        if (processingDecimal) {
            return;
        } else {
            processingDecimal = true;
            updateDisplay(`${formatNumber(interpretNumber(currentNumber))}.`);
        }
    } else {
        updateDisplay(c);
    }

}

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
// Operators
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

function updateDisplay(value) {
    const display = document.querySelector(".display");
    display.textContent = value;
}


/*

currentNumber:
5.1

decimals added:
1

next number:
1

result should be:
5.11

adding:
0.01

= 1/100

10 * 1




*/