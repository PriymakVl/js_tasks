const box = document.querySelector('.box');
let size = 100;
let fontSize = 20;

box.onclick = plus
box.onmouseout = reset

function plus() {
    size += 50;
    fontSize += 5;
    box.style.height = size + 'px';
    box.style.width = size + 'px';
    box.style.fontSize = fontSize + 'px';
}

function reset() {
    size = 100;
    fontSize = 20;
    box.style.height = size + 'px';
    box.style.width = size + 'px';
    box.style.fontSize = fontSize + 'px';
}