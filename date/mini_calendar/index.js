const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const weekdays = [
    'Воскресенье',
    'Понедельник', 
    'Вторник', 
    'Среда', 
    'Четверг', 
    'Пятница',
    'Суббота',
]

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]

const now = new Date();

monthNameEl.innerText = months[now.getMonth()];

dayNameEl.innerText = weekdays[now.getDay()];

dayNumEl.innerText = now.getDate();

yearEl.innerText = now.getFullYear();
