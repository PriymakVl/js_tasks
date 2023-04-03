// setInterval(() => {
//     var d = new Date();
//     var htime = d.getHours();
//     var mtime = d.getMinutes();
//     var stime = d.getSeconds();
//     var hrotation = 30*htime + mtime/2;
//     var mrotation = 6*mtime;
//     var srotation = 6*stime;

//     hour.style.transform = `rotate(${hrotation}deg)`;
//     minute.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;
// }, 1000);

function clock() {
    let now= new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    rotation(hr, min, sec);
}

function rotation(hr, min, sec) {
    let hrRotation= 30 * hr + min / 2;
    let minRotation = 6 * min;
    let secRotation = 6 * sec;

    hour.style.transform = `rotate(${hrRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(clock, 1000);