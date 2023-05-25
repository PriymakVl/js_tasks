const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const timeEl = document.getElementById("time");
const hitsEl = document.getElementById("hits");
const message = document.getElementById("message");
const fly = document.getElementById('fly');
let seconds;
let hits;
let tsf, trt; //id setTimeout

startBtn.onclick = startGame;
restartBtn.onclick = startGame;

function startGame() {
  document.querySelector(".game-statistics").style.top = '0';
  document.querySelector('.screensaver').style.display = 'none';
  message.style.display = 'none';
  seconds = 30;
  hits = 0;
  hitsEl.innerHTML = `Hits: ${hits}`;
  fly.onclick = catchFly;
  showFly();
  reductionTime();
}

function increaseScore()  {
  hits++;
  hitsEl.innerHTML = `Hits: ${hits}`;
}

function showFly() {
  fly.hidden = false;
  const location = getRandomLocation();
  fly.style.top = location.top + 'px';
  fly.style.left = location.left + 'px';
  fly.style.transform = `rotate(${Math.random() * 360}deg)`;
  tsf = setTimeout(showFly, 900);
}

function catchFly() {
  increaseScore();
  fly.hidden = true;
}

function getRandomLocation () {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return  {left: x, top: y};
}

function reductionTime() {
  seconds--;
  timeEl.innerHTML = `Time: ${seconds} sec`;
  if (seconds == 0) {
    clearTimeout(trt);
    clearTimeout(tsf);
    fly.onclick = null;
    message.style.display = 'block';
  }
  else {
    trt = setTimeout(reductionTime, 1000);
  }
}

