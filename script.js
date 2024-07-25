const buttons = [
    { text: 'AC', class: '', onclick: 'clearDisplay()' },
    { text: '+/-', class: '', onclick: 'toggleSign()' },
    { text: '%', class: '', onclick: 'percentage()' },
    { text: '÷', class: 'button-operation', onclick: 'addToDisplay("/")' },
    { text: '7', class: '', onclick: 'addToDisplay("7")' },
    { text: '8', class: '', onclick: 'addToDisplay("8")' },
    { text: '9', class: '', onclick: 'addToDisplay("9")' },
    { text: 'x', class: 'button-operation', onclick: 'addToDisplay("*")' },
    { text: '4', class: '', onclick: 'addToDisplay("4")' },
    { text: '5', class: '', onclick: 'addToDisplay("5")' },
    { text: '6', class: '', onclick: 'addToDisplay("6")' },
    { text: '-', class: 'button-operation', onclick: 'addToDisplay("-")' },
    { text: '1', class: '', onclick: 'addToDisplay("1")' },
    { text: '2', class: '', onclick: 'addToDisplay("2")' },
    { text: '3', class: '', onclick: 'addToDisplay("3")' },
    { text: '+', class: 'button-operation', onclick: 'addToDisplay("+")' },
    { text: '0', class: 'button-zero', onclick: 'addToDisplay("0")' },
    { text: '.', class: '', onclick: 'addToDisplay(".")' },
    { text: '=', class: 'button-operation', onclick: 'calculate()' },
];

const buttonContainer = document.getElementById('buttons');

buttons.forEach(button => {
    const btn = document.createElement('button');
    btn.className = `button ${button.class}`;
    btn.textContent = button.text;
    btn.setAttribute('onclick', button.onclick);
    buttonContainer.appendChild(btn);
});

function clearDisplay() {
    document.getElementById('display').value = '';
}

function toggleSign() {
    let display = document.getElementById('display');
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}

function percentage() {
    let display = document.getElementById('display');
    display.value = (parseFloat(display.value) / 100).toString();
}

function addToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch {
        display.value = 'Error';
    }
}