const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection div');
const playerIcon = document.querySelector('.user img');
const computerIcon = document.querySelector('.computer img');
const text = document.getElementById('demo');

let computerScore = 0;
let playerScore = 0;

const randomIcons = ['hand-rock', 'hand-paper', 'hand-scissors'];

buttons.forEach(btn => {
    btn.onclick = (event) => {
        playerIcon.src = event.target.src;
        computerIcon.src = getRandomImg();
        setWinner();
    };
})

function draw() {
    text.innerHTML = "Ничья!";
    text.style.color = 'orange';
}

function win() {
    text.innerHTML = "Ты победил!";
    text.style.color = '#019282';
    pScore.innerText = ++playerScore;
}

function lose() {
    text.innerHTML = "Ты проиграл!";
    text.style.color = 'red';
    cScore.innerText = ++computerScore;
}

function getRandomImg() {
    let ranIndex = Math.floor(Math.random() * randomIcons.length);
    let icon = randomIcons[ranIndex];
    return 'img/' + icon + '.svg';
}

function setWinner() {
    let player = playerIcon.src.split('/').pop().split('.').shift().split('-').pop();
    let computer = computerIcon.src.split('/').pop().split('.').shift().split('-').pop();
    if (player == computer) return draw();
    if (player == 'rock' && computer == 'scissors') return win();
    if (player == 'rock' && computer == 'paper') return lose();
    if (player == 'paper' && computer == 'rock') return win();
    if (player == 'paper' && computer == 'scissors') return lose();
    if (player == 'scissors' && computer == 'paper') return win();
    if (player == 'scissors' && computer == 'rock') return lose();
}

