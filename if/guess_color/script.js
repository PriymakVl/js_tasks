const startBtn = document.getElementById('start-btn');
const colorBox = document.querySelector('.color-wrp');
const colorCode = document.querySelector('.color-code');
const firstColor = document.querySelector('#first');
const secondColor = document.querySelector('#second');
const thirdColor = document.querySelector('#third');
const fourthColor = document.querySelector('#fourth');
let colorComp, colorCompNum;


startBtn.addEventListener('click', startGame);
firstColor.addEventListener('click', checkColor);
secondColor.addEventListener('click', checkColor);
thirdColor.addEventListener('click', checkColor);
fourthColor.addEventListener('click', checkColor);


function startGame() {
	startBtn.style.display = 'none';
	colorBox.style.display = 'grid';
	colorComp = getRandomColor();
	colorCode.textContent = colorComp;
	colorCode.style.display = 'block';
	colorCompNum = Math.floor(Math.random() * 4) + 1;
	setColors();
}

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function setColors() {
	firstColor.style.backgroundColor = (colorCompNum == 1) ? colorComp : getRandomColor();
	secondColor.style.backgroundColor = (colorCompNum == 2) ? colorComp : getRandomColor();
	thirdColor.style.backgroundColor = (colorCompNum == 3) ? colorComp : getRandomColor();
	fourthColor.style.backgroundColor = (colorCompNum == 4) ? colorComp : getRandomColor();
}

function checkColor() {
	const cssObj = window.getComputedStyle(this);
	let bgColor = cssObj.getPropertyValue("background-color");
	if (bgColor == colorComp) {
		firstColor.style.backgroundColor = 'transparent';
		secondColor.style.backgroundColor = 'transparent';
		thirdColor.style.backgroundColor = 'transparent';
		fourthColor.style.backgroundColor = 'transparent';
		this.style.backgroundColor = bgColor;
	}
	else {
		this.style.backgroundColor = 'transparent';
	}
}
	
