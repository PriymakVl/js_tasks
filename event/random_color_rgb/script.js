const btnEl = document.querySelector('.btn');
const blockEl = document.querySelector('.block');

btnEl.onclick = changeBgBlock;

function changeBgBlock() {
    let randomColor = getRandomColor();
    blockEl.style.backgroundColor = randomColor;
    blockEl.innerText = randomColor;
}

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

