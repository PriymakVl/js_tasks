let square = document.querySelector('.square');
let disc = document.querySelector('.disc');

square.onmouseover = changeFigure;
square.onmouseout = backFigure;

function changeFigure() {
    square.style.borderRadius = '50%';
    disc.style.width = '200px';
    disc.style.height = '200px';
}

function backFigure() {
    square.style.borderRadius = '0';
    disc.style.width = '0';
    disc.style.height = '0';
}