let display = document.getElementById('display');
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += number;
}

function setOperation(operation) {
    if (display.value === '' || shouldResetDisplay) return;
    display.value += operation;
    shouldResetDisplay = false;
}

function calculate() {
    let expression = display.value;
    try {
        let result = eval(expression);
        display.value = result;
        shouldResetDisplay = true;
    } catch (error) {
        display.value = 'Erreur';
        shouldResetDisplay = true;
    }
}

function clearDisplay() {
    display.value = '';
    shouldResetDisplay = false;
}