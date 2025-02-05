let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += number;
}

function setOperation(operation) {
    if (display.value === '') return;
    if (currentOperation !== '') {
        calculate();
    }
    firstOperand = display.value;
    currentOperation = operation;
    display.value += operation;
    shouldResetDisplay = false;
}

function calculate() {
    let expression = display.value;
    try {
        let result = eval(expression);
        display.value = result;
        firstOperand = result;
        currentOperation = '';
        shouldResetDisplay = true;
    } catch (error) {
        display.value = 'Erreur';
        firstOperand = '';
        currentOperation = '';
        shouldResetDisplay = true;
    }
}

function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
    shouldResetDisplay = false;
}