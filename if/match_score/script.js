const btnP1 = document.getElementById('p1');
const btnP2 = document.getElementById('p2');
const btnReset = document.getElementById('reset');
const scoreP1 = document.querySelector('.p1-score');
const scoreP2 = document.querySelector('.p2-score');
var winEl = document.querySelector('#winner');
var numP1 = 0;
var numP2 = 0;
var gameOver = false;
var winScore = 3;

btnP1.onclick = showScoreP1;
btnP2.onclick = showScoreP2;
btnReset.onclick = reset;

function showScoreP1() {
  if (gameOver == false) {
    numP1++;
    if (numP1 === winScore) {
      gameOver = true;
      scoreP1.style.color = 'yellow';
      winEl.innerText = 'Победил первый игрок!!!';
    }
    scoreP1.innerText = numP1;
  }
}

function showScoreP2() {
  if (gameOver == false) {
    numP2++;
    if (numP2 === winScore) {
      gameOver = true;
      scoreP2.style.color = 'yellow';
      winEl.innerText = 'Победил второй игрок!!!';
    }
    scoreP2.innerText = numP2;
  }
}

function reset() {
  numP1 = 0;
  numP2 = 0;
  scoreP1.innerText = numP1;
  scoreP2.innerText = numP2;
  scoreP1.style.color = 'white';
  scoreP2.style.color = 'white';
  gameOver = false;
  winEl.innerText = '';
}

