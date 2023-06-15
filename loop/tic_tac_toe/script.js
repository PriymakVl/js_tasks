const gameOverMsg = document.getElementById('gameover-msg')
const winner = document.getElementById('winner')
const resetBtn = document.getElementById('reset-btn')
const cells = document.querySelectorAll('#gameboard td');
const cellsArr = []
const ivoryColor = '#F6F7EB'
const greenColor = '#16b550'
let gameOver = false
let numPlayerMoves = 0
let isPlayerTurn = true;

let winCombo = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

resetBtn.onclick = reset;
cells.forEach(cell => cell.onclick = handleClick)

// преобразуем nodeList в массив
cells.forEach(cell => cellsArr.push(cell))

function handleClick() {
  // запрещаем клик по занятому полю
  if (gameOver == true || this.innerText != '') return;
  numPlayerMoves++;
  playerTurn(this);
  setTimeout(compTurn, 1500);
}

  function playerTurn(cell) {
    if (isPlayerTurn == false || gameOver == true) return;
    cell.textContent = 'X';
    // удаляем поле из массива
    cellsArr.splice(cellsArr.indexOf(cell), 1);
    checkWin('X');
    if (numPlayerMoves == 5) {
      gameOver = true;
      displayMessage(false);
    }
    else {
      // передаем ход компьютеру
      isPlayerTurn = false;
    }
  }

  function compTurn() {
    if (isPlayerTurn == true || gameOver == true) return;
    let index = Math.floor(Math.random() * cellsArr.length);
    cellsArr[index].textContent = 'O';
    // удаляем поле из массива
    cellsArr.splice(index, 1);
    checkWin('O');
    // возвращаем ход игроку
    isPlayerTurn = true;
  }

  function getFilledCells(char) {
    let cells = document.querySelectorAll('#gameboard td');
    let arr = [];
    cells.forEach(cell => cell.textContent == char ? arr.push(cell) : arr.push(null));
    return arr;
  }

function checkWin(char) {
  let filledCells = getFilledCells(char);
  let cells = [];
  for (let combo of winCombo) {
    cells[0] = filledCells[combo[0]];
    cells[1] = filledCells[combo[1]];
    cells[2] = filledCells[combo[2]];
    if (cells[0] === null || cells[1] === null || cells[2] === null) continue;
    if (checkCombo(cells)) {
      finishGame(cells, char);
      break;
    };
  }
}

function checkCombo(cells) {
  if (cells[0].textContent != cells[1].textContent) return false;
  if (cells[0].textContent != cells[2].textContent) return false;
  return true;
}

function finishGame(cells, char) {
  cells.forEach(cell => cell.style.color = greenColor);
  gameOver = true;
  setTimeout(displayMessage, 1500, char);
}

function displayMessage(char) {
  gameOverMsg.style.display = 'block';
  if (char == 'X') winner.textContent = 'Поздравляем с победой!';
  else if (char == 'O') winner.textContent = 'Жаль но вы проиграли! :(';
  else winner.textContent = 'В этот раз ничья';
}

function reset() {
  for (let cell of cells) {
    cell.style.color = ivoryColor;
    cell.textContent = '';
  }
  gameOver = false;
  isPlayerTurn = true;
  numPlayerMoves = 0;
  // заполняем массив 
  cellsArr.length = 0;
  cells.forEach(cell => cellsArr.push(cell))
  gameOverMsg.style.display = 'none';
}


 
