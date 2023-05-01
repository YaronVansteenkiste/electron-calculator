const closeBtn = document.getElementById('close-btn');
let result = document.getElementById('result');
let delEl = document.getElementById('del');
let addEl = document.getElementById('+');
let minusEl = document.getElementById('-');
let eqEl =  document.getElementById('equation');
let equalsEl = document.getElementById('equals');
let plusNumb1 = 0;
let prevNumber = 0;
let currentOperator = '';
let plusMinusEl = document.getElementById('plusMinus');
let commaEl = document.getElementById('comma');

delEl.onclick = removeNumber;
addEl.onclick = function() { operatorFunction('+'); };
minusEl.onclick = function() { operatorFunction('-'); };
equalsEl.onclick = equals;
plusMinusEl.onclick = plusMinus;
commaEl.onclick = addComma;

for (let i = 0; i <= 9; i++) {
    let num = document.getElementById(i.toString());
    num.onclick = displayNumber;
}

function displayNumber() {
    return result.innerText === '0' ? result.innerText = this.innerHTML : result.innerText += this.innerHTML;
}

function removeNumber() {
    if (result.innerText.length===1) {
        result.innerText = '0';
    } else {
        result.innerText = result.innerText.substring(0, result.innerText.length - 1)
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
