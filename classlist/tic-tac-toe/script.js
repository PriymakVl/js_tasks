const gameOverMsg = document.querySelector('.gameover-msg-wrp');
const winnerInfo = document.getElementById('winner');
const resetBtn = document.getElementById('reset-btn');


let winCombo = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];


document.querySelectorAll('.cell').forEach(cell => cell.onclick = handleClick)

function handleClick() {
  if (this.classList.contains('empty')) {
    playerTurn(this);
    setTimeout(compTurn, 1500);
  }
}

  function playerTurn(cell) {
    cell.innerHTML = '<img src="img/cross.svg">'
    cell.classList.replace('empty', 'player');
    checkWin('player');
  }

function compTurn() {
  const emptyCells = document.querySelectorAll('.empty');
  if (emptyCells.length == 0) return;
  const index = Math.floor(Math.random() * emptyCells.length);
  emptyCells[index].innerHTML = '<img src="img/circle.svg">'
  emptyCells[index].classList.replace('empty', 'comp');
  checkWin('comp');
}


function checkWin(classCSS) {
  let cells = document.querySelectorAll('.cell');
  for (let combo of winCombo) {
    let class_1 = cells[combo[0]].classList.contains(classCSS);
    let class_2 = cells[combo[1]].classList.contains(classCSS);
    let class_3 = cells[combo[2]].classList.contains(classCSS);
    if (class_1 && class_2 && class_3) {
      finishGame(combo, classCSS);
      break;
    };
  }
}

function finishGame(combo, winner) {
  let cells = document.querySelectorAll('.cell');
  for (let index of combo) {
    cells[index].style.backgroundColor = '#16b550';
  }
  setTimeout(displayMessage, 1500, winner);
}

function displayMessage(winner) {
  gameOverMsg.style.display = 'block';
  if (winner == 'player') winnerInfo.textContent = 'Поздравляем с победой!';
  else if (winner == 'comp') winnerInfo.textContent = 'Жаль но вы проиграли! :(';
  else winnerInfo.textContent = 'В этот раз ничья';
}

resetBtn.onclick = () => {
  let cells = document.querySelectorAll('.cell');
  for (let cell of cells) {
    cell.style.backgroundColor = 'transparent';
    cell.innerHTML = '';
    cell.className = 'cell empty';
  }
  gameOverMsg.style.display = 'none';
}


 
