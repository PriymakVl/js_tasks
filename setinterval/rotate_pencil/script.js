const container = document.querySelector('#container');
let deg = 0;

function spin() {
    deg++;
    if (deg >= 360) {
      deg = 0;
    } else {
      container.style.transform = `rotate(${-deg}deg)`;
    }
}

setInterval(spin, 20);
