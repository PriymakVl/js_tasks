const text = document.querySelector('.text');
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');

redBtn.onclick = function() {
    text.style.color = 'red';
}

blueBtn.onclick = function() {
    text.style.color = 'blue';
}

greenBtn.onclick = function() {
    text.style.color = 'green';
}

