i = 0;
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const textEl = document.querySelector('#text');
let clearId;

startBtn.addEventListener('click', startChangeColor);
startBtn.addEventListener('click', toggleBtn);
stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor() {
	let colors = ["red", "green", "blue", "gold", "coral", "pink"];
	if (i == colors.length) {
		i = 0;
	}
    textEl.style.color = colors[i];
	i++ ;
	clearId = setTimeout(startChangeColor, 1000);
}

function toggleBtn() {
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
}

function stopChangeColor() {
    clearTimeout(clearId);
    stopBtn.style.display = 'none';
    startBtn.style.display = 'inline-block';
    textEl.style.color = '#000';
}