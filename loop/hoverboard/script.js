const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const items = 500;

for (let i = 0; i < items; i++) {
    container.innerHTML += '<div></div>';
}

let divs = document.querySelectorAll('.container div');

for(let k = 0; k < divs.length; k++) {
    divs[k].onmouseover = () => divs[k].style.background = getRandomColor();
    divs[k].onmouseout = () => divs[k].style.background = '#1d1d1d';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}