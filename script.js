function addFunction (a, b) {
    return a + b;
}
function subtractFunction (a, b) {
    return a - b;
}
function multiplyFunction (a, b) {
    return a * b;
}
function divideFunction (a, b) {
    return a / b;
}

let firstNum = 0;
let secondNum = 0;

const displayArea = document.querySelector("#display");
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
    displayArea.textContent = "";
});