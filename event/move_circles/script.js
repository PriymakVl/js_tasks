let center = document.querySelector('.center');

center.onclick = moveCircles

function moveCircles() {
    document.querySelector('.right').style.left = '25%';
    document.querySelector('.left').style.left = '75%';
}