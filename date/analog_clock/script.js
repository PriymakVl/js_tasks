const hourArrow = document.getElementById('hour');
const minArrow = document.getElementById('minute');
const secArrow = document.getElementById('second');

function clock() {
    let now= new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    rotation(hr, min, sec);
}

setInterval(clock, 1000);

function rotation(hr, min, sec) {
    let hrRotation= 30 * hr + min / 2;
    let minRotation = 6 * min;
    let secRotation = 6 * sec;

    hourArrow.style.transform = `translateX(-50%) rotate(${hrRotation}deg)`;
    minArrow.style.transform = `translateX(-50%) rotate(${minRotation}deg)`;
    secArrow.style.transform = `translateX(-50%) rotate(${secRotation}deg)`;
}




