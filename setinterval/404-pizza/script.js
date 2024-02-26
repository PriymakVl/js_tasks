const cheese = document.querySelector('.cheese');
let deg = 0;

function spin() {
    deg++;
    if (deg >= 360) {
      deg = 0;
    } else {
      cheese.style.transform = `rotate(${deg}deg)`;
    }
}

setInterval(spin, 50);
