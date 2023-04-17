const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const startBtn = document.querySelector('.start');
let timerId;

startBtn.onclick = startGame;

function startGame() {
    cactus.classList.add('cactus-move');
    document.addEventListener('keydown', jump);
    timerId = setInterval(check, 10);
}



function jump(event) {
    if (event.keyCode != 32) return;
    if (dino.classList.contains('jump')) return;
    dino.classList.add('jump');
    setTimeout(() => dino.classList.remove('jump'), 1000);
}

function check() {
    let dinoBottom = parseInt(getComputedStyle(dino).bottom);
    let cactusLeft = parseInt(getComputedStyle(cactus).left);
    if (cactusLeft > 10 && cactusLeft < 60 && dinoBottom < 45) {
        alert('Вы проиграли!!');
        clearInterval(timerId);
        cactus.classList.remove('cactus-move');
        document.removeEventListener('keydown', jump);
    }
}



