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

    hour.style.transform = `translate(-50%) rotate(${hrRotation}deg)`;
    minute.style.transform = `translate(-50%) rotate(${minRotation}deg)`;
    second.style.transform = `translate(-50%) rotate(${secRotation}deg)`;
}




