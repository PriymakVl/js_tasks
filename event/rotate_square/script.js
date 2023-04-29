const select = document.querySelector('select');
const square = document.querySelector('.square');


select.onchange = () => square.style.transformOrigin = select.value;
