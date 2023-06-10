const monthEl = document.querySelector(".month");
const fullDateEl = document.querySelector(".date");
const daysEl = document.querySelector(".days");
let days = "";
const now = new Date();

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const monthInx = now.getMonth();

monthEl.innerText = months[monthInx];

fullDateEl.innerText = getFullDate();

// Дни прошлого месяца
const daysLastMonth = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;

for (let i = daysLastMonth; i > 0; i--) {
  days += '<div class="empty"></div>';
}

// Последний день текущего месяца
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();

for (let i = 1; i <= lastDay; i++) {
  if (i === now.getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;

function getFullDate() {
  const now = new Date();
  let month = now.getMonth() + 1;
  if (month < 10) month = '0' + month;
  let day = now.getDate();
  if (day < 10) day = '0' + day;
  let year = now.getFullYear() % 100;
  return day + '.' + month + '.' + year;
}

