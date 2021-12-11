const inputText = document.querySelector("#text")
const square = document.querySelector("#square")
const e_btn = document.querySelector("#e_btn")
const range = document.querySelector("#range")
const circle = document.querySelector("#circle")
let size;
let backgroundColorSquare;


const setColor = function(event) {
    backgroundColorSquare = event.target.value
    e_btn.style.display = "block";
    console.log("backgroundColorSquare",typeof backgroundColorSquare);
}

const changeStyle = function(){
    square.style.backgroundColor = backgroundColorSquare;
        e_btn.style.display = "none";
}

const setSize = function(event){
circle.style.width = event.target.value + '%'
circle.style.height = event.target.value + '%'
}

inputText.addEventListener('input', setColor)
e_btn.addEventListener('click', changeStyle)
range.addEventListener('input', setSize)