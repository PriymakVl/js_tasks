let el = document.querySelector('.mes');
let now = new Date();
let hour = now.getHours();

if (hour > 7 && hour < 11) {
    el.innerText = 'Доброе утро';
}
else if (hour > 10 && hour < 18) {
    el.innerText = 'Добрый день';
}
else if (hour > 18 && hour < 22) {
    el.innerText = 'Добрый вечер';
}
else {
    el.innerText = 'Спокойной ночи';
}