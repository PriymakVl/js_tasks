let center = document.querySelector('.center');
let right = document.querySelector('.right');
let left = document.querySelector('.left'); 

center.onmouseover = moveCircles
center.onmouseout = backCircles

function moveCircles() {
    right.style.left = '25%';
    left.style.left = '75%';
}

function backCircles() {
    right.style.left = '50%';
    left.style.left = '50%';
}