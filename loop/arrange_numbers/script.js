const container = document.querySelector('.container');
const startBtn = document.querySelector('.start-btn');
const restartBtn = document.querySelector('.restart-btn');
const timeEl = document.querySelector('.time');
const gameEl = document.querySelector('.game');
const endMessageEl = document.querySelector('.end-message');
let time = 60;
let gameOver = false;

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

function startGame() {
	document.querySelector('.screensaver').style.display = 'none';
	gameEl.style.display = 'flex';
	fillContainer();
	container.addEventListener('click', moveNumber);
	timer();
}

function restartGame() {
	endMessageEl.style.display = 'none';
	gameEl.style.display = 'flex';
	container.innerHTML = '';
	fillContainer();
	container.addEventListener('click', moveNumber);
	time = 60;
	gameOver = false;
	timer();
}

function fillContainer(){
	const arr = shuffleArray();
	for(let i = 0; i < 25; i++) {
		container.innerHTML += `<div class="item">${arr[i] ?? ''}</div>`;
	}
}

function shuffleArray(){
	let arr_shuffled = [];
	let arr = createArrayNumbers();

	while(arr.length != 0){
		let randomIndex = Math.floor(Math.random() * arr.length);
		arr_shuffled.push(arr.splice(randomIndex, 1));
	}
	return arr_shuffled;
}

function createArrayNumbers() {
	let arr = [];
	for(var i = 1; i < 25; i++){
		arr.push(i);
	}
	return arr;
}

function moveNumber(event) {
	if (event.target.className == 'container') return;
	let currentItem = event.target;
	let items = document.querySelectorAll('.container div');
	for (let i = 0; i < items.length; i++) {
		if (items[i].innerText == '') {
			items[i].innerText = currentItem.innerText;
			currentItem.innerText = '';
			break;
		}
	}
	checkFinish(items);
}

function timer() {
	if (gameOver) return;
	timeEl.innerText = --time;
	if (time == 0) return endGame(false)
	setTimeout(timer, 1000);
}

function checkFinish(items) {
	const filledItems = 24;
	for(let i = 0; i < filledItems; i++){
		if (items[i].innerText != i + 1) return;
	}
	endGame(true);
}

function endGame(win) {
	gameOver = true;
	gameEl.style.display = 'none';
	endMessageEl.style.display = 'block';
	let gameResult = document.querySelector('.game-result');
	if (win) {
		gameResult.innerText = 'Вы победили !';
		document.querySelector('.time-info').style.display = 'block';
		document.querySelector('.game-time') = 60 - time;
	} else {
		gameResult.innerText = 'К сожалению вы проиграли :(';
	}
}