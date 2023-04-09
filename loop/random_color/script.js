const btnEl = document.querySelector('.btn');
const blockEl = document.querySelector('.block');
const colorEl = document.querySelector('.color');
const hex = '0123456789ABCDEF';


btnEl.addEventListener('click', () => {
    let randomColor = getRandomColor();
    blockEl.style.backgroundColor = randomColor;
    colorEl.innerText = randomColor;
});

const getRandomColor = () => {
    let index; 
    let color = '#';
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * hex.length);
        color += hex[index];
    }
    return color;
}

