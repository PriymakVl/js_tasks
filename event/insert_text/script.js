const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

btn.onclick = addText;

function addText() {
    text.innerText = 'Hello world!';
    text.style.padding = '20px';
    btn.style.display = 'none';
}