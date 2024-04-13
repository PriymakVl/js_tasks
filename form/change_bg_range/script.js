const rangeRed = document.querySelector('#red');
const rangeGreen = document.querySelector('#green');
const rangeBlue = document.querySelector('#blue');
let box = document.getElementById('box');
let result = document.querySelector('#out span');

rangeRed.oninput = generatorBackgrounColor;
rangeGreen.oninput = generatorBackgrounColor;
rangeBlue.oninput = generatorBackgrounColor;

function generatorBackgrounColor() {
    let red = rangeRed.value;
    let green = rangeGreen.value;
    let blue = rangeBlue.value;

    let color =  `rgb(${red}, ${green}, ${blue})`;

    box.style.backgroundColor = color;

    result.innerText = color;
}