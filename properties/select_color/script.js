const box = document.querySelector('.box');
const colorWrp = document.querySelector('.color-wrp');

colorWrp.onclick = setColor

function setColor(event) {
  const color = event.target.getAttribute("data-color");
  box.style.background = color;
}

