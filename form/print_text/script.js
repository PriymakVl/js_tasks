let input = document.querySelector('.input');
let out = document.querySelector('.out');

input.onkeydown = printText

function printText() {
    out.innerText = input.value
}