const circleEl = document.querySelector('.circle');
const clockEl = document.querySelector('.clock');


const clock = () => {
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (hr < 10) hours = '0' + hr;
    if (min < 10) min = '0' +  min;
    if (sec < 10) sec = '0' + sec;

    clockEl.innerHTML = hr + ':' + min + ':' + sec;

    circleEl.style.borderColor = (sec % 2 == 0) ? '#f52720' : '#3ffc3f';
}

setInterval(clock, 1000);

