const dayEl = document.querySelector('.day');
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const now = new Date();
const day = now.getDay();

dayEl.textContent = days[day];
