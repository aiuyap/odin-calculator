function addFunction () {
    getSecondNum();
    displayArea.textContent = firstNum + secondNum;
}
function subtractFunction () {
    getSecondNum();
    displayArea.textContent = firstNum - secondNum;
}
function multiplyFunction () {
    getSecondNum();
    displayArea.textContent = firstNum * secondNum;
}
function divideFunction () {
    getSecondNum();
    displayArea.textContent = firstNum / secondNum;
}
function getDisplayNumber () {
    return parseInt(displayArea.textContent);
}
function processAfterPressingOperator () {
    firstNum = getDisplayNumber();
    displayArea.textContent = null;
    canPressOperator = 0;
    buttonEqual.disabled = false;
}
function getSecondNum () {
    secondNum = getDisplayNumber();
    canPressOperator = 1;
    buttonEqual.disabled = true;
}


let firstNum;
let secondNum;
let currentOperator;
let canPressOperator = 1;

const displayArea = document.querySelector("#display");
displayArea.textContent = null;
const buttonEqual = document.querySelector("#equalBtn");

const buttonOne = document.querySelector("#oneBtn");
buttonOne.addEventListener("click", () => {
    displayArea.textContent += "1";
});

const buttonTwo = document.querySelector("#twoBtn");
buttonTwo.addEventListener("click", () => {
    displayArea.textContent += "2";
});

const buttonThree = document.querySelector("#threeBtn");
buttonThree.addEventListener("click", () => {
    displayArea.textContent += "3";
});

const buttonFour = document.querySelector("#fourBtn");
buttonFour.addEventListener("click", () => {
    displayArea.textContent += "4";
});

const buttonFive = document.querySelector("#fiveBtn");
buttonFive.addEventListener("click", () => {
    displayArea.textContent += "5";
});

const buttonSix = document.querySelector("#sixBtn");
buttonSix.addEventListener("click", () => {
    displayArea.textContent += "6";
});

const buttonSeven = document.querySelector("#sevenBtn");
buttonSeven.addEventListener("click", () => {
    displayArea.textContent += "7";
});

const buttonEight = document.querySelector("#eightBtn");
buttonEight.addEventListener("click", () => {
    displayArea.textContent += "8";
});

const buttonNine = document.querySelector("#nineBtn");
buttonNine.addEventListener("click", () => {
    displayArea.textContent += "9";
});

const buttonZero = document.querySelector("#zeroBtn");
buttonZero.addEventListener("click", () => {
    displayArea.textContent += "0";
});

const buttonClear = document.querySelector("#clearBtn");
buttonClear.addEventListener("click", () => {
    firstNum = 0;
    secondNum = 0;
    displayArea.textContent = null;
    currentOperator = 0;
    canPressOperator = 1;
});

const buttonAdd = document.querySelector("#addBtn");
buttonAdd.addEventListener("click", () => {
    if (canPressOperator > 0) {
        currentOperator = 1;
        processAfterPressingOperator();
    }
});
const buttonSubtract = document.querySelector("#subtractBtn");
buttonSubtract.addEventListener("click", () => {
    if (canPressOperator > 0) {
        currentOperator = 2;
        processAfterPressingOperator();
    }
});
const buttonMultiply = document.querySelector("#multiplyBtn");
buttonMultiply.addEventListener("click", () => {
    if (canPressOperator > 0) {
        currentOperator = 3;
        processAfterPressingOperator();
    }
});
const buttonDivide = document.querySelector("#divideBtn");
buttonDivide.addEventListener("click", () => {
    if (canPressOperator > 0) {
        currentOperator = 4;
        processAfterPressingOperator();
    }
});

buttonEqual.addEventListener("click", () => {
    switch(currentOperator) {
        case 1:
            addFunction();
            break;
        case 2:
            subtractFunction();
            break;
        case 3:
            multiplyFunction();
            break;
        case 4:
            divideFunction();
            break;
        default:
            break;
    }
});