const now = new Date();
let  day = now.getDay();
const daysEl = document.querySelectorAll('.day');

daysEl[day].style.borderColor = 'blue';
daysEl[day].style.color = 'red';
daysEl[day].style.backgroundColor = 'yellow';