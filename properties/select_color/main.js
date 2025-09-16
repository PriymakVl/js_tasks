const box = document.querySelector('.box');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

red.onclick = setColorBg
green.onclick = setColorBg
blue.onclick = setColorBg

function setColorBg() {
  let color = this.getAttribute('data-color');
  box.style.backgroundColor = color;
}

