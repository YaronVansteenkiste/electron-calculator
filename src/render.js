const closeBtn = document.getElementById('close-btn');
const result = document.getElementById('result');
const delEl = document.getElementById('del');
const addEl = document.getElementById('+');
const minusEl = document.getElementById('-');
const eqEl = document.getElementById('equation');
const equalsEl = document.getElementById('equals');
let prevNumber = 0;
let currentOperator = '';
const plusMinusEl = document.getElementById('plusMinus');
const commaEl = document.getElementById('comma');

delEl.onclick = removeNumber;
addEl.onclick = () => operatorFunction('+');
minusEl.onclick = () => operatorFunction('-');
equalsEl.onclick = equals;
plusMinusEl.onclick = plusMinus;
commaEl.onclick = addComma;

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(num => {
const element = document.getElementById(num.toString());
element.onclick = displayNumber;
});

function displayNumber() {
result.innerText = result.innerText === '0' ? this.innerHTML : result.innerText + this.innerHTML;
}

function removeNumber() {
if (result.innerText.length === 1) {
result.innerText = '0';
} else {
result.innerText = result.innerText.slice(0, -1);
}
}

function plusMinus() {
result.innerText = parseFloat(result.innerText) * -1;
}

function operatorFunction(operator) {
prevNumber = result.innerText;
eqEl.innerText = prevNumber + operator;
currentOperator = operator;
result.innerText = '0';
}

function equals() {
if (eqEl.textContent.includes('+')) {
result.innerText = parseFloat(prevNumber) + parseFloat(result.innerText);
} else if (eqEl.textContent.includes('-')) {
result.innerText = parseFloat(prevNumber) - parseFloat(result.innerText);
}
eqEl.innerText = '';
prevNumber = 0;
currentOperator = '';
}

function addComma() {
if (!result.innerText.includes('.')) {
result.innerText += '.';
}
}

closeBtn.addEventListener('click', () => {
window.close();
});