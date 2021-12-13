const inputText = document.querySelector('#text');
const square = document.querySelector('#square');
const eBtn = document.querySelector('#e_btn');
const btn = document.querySelector('#btn');
const range = document.querySelector('#range');
const circle = document.querySelector('#circle');
const rangeSpan = document.querySelector('#range-span');
let backgroundColorSquare;

const setColor = function (event) {
    backgroundColorSquare = event.target.value;
};

const changeStyle = function () {
    square.style.backgroundColor = backgroundColorSquare;
};

const hideBtn = function () {
    eBtn.style.display = 'none';
};

const setSize = function (event) {
    circle.style.width = event.target.value + '%';
    circle.style.height = event.target.value + '%';
    rangeSpan.textContent = event.target.value + '%';
};

inputText.addEventListener('input', setColor);
eBtn.addEventListener('click', hideBtn);
btn.addEventListener('click', changeStyle);
range.addEventListener('input', setSize);