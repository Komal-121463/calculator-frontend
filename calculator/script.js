// Function to append numbers and operators to the display screen
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').innerText = '0';
}

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    document.getElementById('display').innerText = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').innerText = currentInput;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        currentInput = '';
    }
}