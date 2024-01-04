const monthEl = document.getElementById("month");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const langEl = document.getElementById('lang');

const now = new Date();

langEl.onchange = setLangCalendar;

function setLangCalendar() {
    let lang = langEl.value;
    monthEl.innerText = now.toLocaleString(lang, {month: 'long'});
    dayNameEl.innerText = now.toLocaleString(lang, {weekday: 'long'});
    dayNumEl.innerText = now.getDate();
    yearEl.innerText = now.getFullYear();
}

setLangCalendar();










