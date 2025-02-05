let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    display.value += number;
}

function setOperation(operation) {
    if (display.value === '') return;
    firstOperand = display.value;
    currentOperation = operation;
    display.value = '';
}

function calculate() {
    if (display.value === '' || firstOperand === '') return;
    secondOperand = display.value;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    display.value = result;
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
}

function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
}