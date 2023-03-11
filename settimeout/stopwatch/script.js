const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let seconds = 0;
let clearId;

startBtn.onclick = startTimer;
stopBtn.onclick = () => clearTimeout(clearId);
resetBtn.onclick = resetTimer;

function startTimer () {
  seconds++;
  timerEl.innerText = (seconds > 10) ? seconds : '0' + seconds;
  clearId = setTimeout(startTimer, 1000);
}

function resetTimer () {
  clearInterval(clearId);
  seconds = 0;
  timerEl.innerText = '00';
}


