let date = document.querySelector('.date');
let now = new Date();
let day;
let month;
let year;

day = now.getDate();
day = addZero(day);

month = now.getMonth() + 1;
month = addZero(month);

year = now.getFullYear();
year = year % 100;

date.innerText = day + '.' + month  + '.' + year;

function addZero(num) {
    if (num < 10) {
        num = '0' + num;
    }
    return num;
}

