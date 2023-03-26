const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const langEl = document.getElementById('lang');
const now = new Date();

const weekDaysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const weekDaysUa = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];

const monthUa = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень'
]


const monthsRu = [
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

langEl.onchange = setLangCalendar;

function setLangCalendar() {
    lang = langEl.value;
    monthNameEl.innerText = getMonth();
    dayNameEl.innerText = getWeekDay();
    dayNumEl.innerText = now.getDate();
    yearEl.innerText = now.getFullYear();
}

function getMonth() {
    if (lang == 'en') return now.toLocaleString('en', {month: 'long'});
    if (lang == 'ru') return monthsRu[now.getMonth()];
    return monthUa[now.getMonth()];
}

function getWeekDay() {
    if (lang == 'en') return now.toLocaleString('en', {weekday: 'long'});
    if (lang == 'ru') return weekDaysRu[now.getDay()];
    return weekDaysUa[now.getDay()];
}

setLangCalendar();










