var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var p1Tally = document.querySelector('.p1-score');
var p2Tally = document.querySelector('.p2-score');
var inputNumber = document.querySelector('input');
var winningScoreDisplay = document.querySelector('#score-goal');
var winner = document.querySelector('#winner');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener('click', function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Tally.classList.add('winning-color');
      winner.textContent = 'PLAYER 1 WINS!!';
    }
    p1Tally.textContent = p1Score;
  }
});

p2.addEventListener('click', function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Tally.classList.add('winning-color');
      winner.textContent = 'PLAYER 2 WINS!';
    }
    p2Tally.textContent = p2Score;
  }
});

resetButton.addEventListener('click', function () {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Tally.textContent = p1Score;
  p2Tally.textContent = p2Score;
  p1Tally.classList.remove('winning-color');
  p2Tally.classList.remove('winning-color');
  gameOver = false;
  winner.textContent = '';
}

inputNumber.addEventListener('change', function () {
  winningScoreDisplay.textContent = inputNumber.value;
  winningScore = Number(inputNumber.value);
  reset();
});