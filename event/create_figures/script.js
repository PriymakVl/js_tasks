const circle = document.querySelector('.circle');
const square = document.querySelector('.square');
const triangle = document.querySelector('.triangle');
const rectangle = document.querySelector('.rectangle');
const figure = document.querySelector('.figure');

circle.onclick = createCircle;
square.onclick = createSquare;
rectangle.onclick = createRectangle;

function createSquare() {
    activeButton(square);
    figure.style.width = '200px';
    figure.style.height = '200px';
    figure.style.backgroundColor = 'red';
    figure.style.borderRadius = '0';
    figure.style.border = 'none';
}

function createCircle() {
    activeButton(circle);
    figure.style.width = '200px';
    figure.style.height = '200px';
    figure.style.backgroundColor = 'blue';
    figure.style.borderRadius = '50%';
    figure.style.border = 'none';
}

function createRectangle() {
    activeButton(rectangle);
    figure.style.width = '400px';
    figure.style.height = '200px';
    figure.style.backgroundColor = 'green';
    figure.style.borderRadius = '0';
    figure.style.border = 'none';
}

function activeButton(active) {
    square.style.color = '#000';
    circle.style.color = '#000';
    rectangle.style.color = '#000';
    active.style.color = 'red';
}


