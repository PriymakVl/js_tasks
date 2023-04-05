const  redBtn = document.querySelector('#red');
const blueBtn = document.querySelector('#blue');
const blockEl = document.querySelector('#block');

redBtn.onclick = setRed;
blueBtn.onclick = setBlue;

function setRed() {
	blockEl.style.backgroundColor = 'red';
}

function setBlue() {
	blockEl.style.backgroundColor = 'blue';
}