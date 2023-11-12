const select = document.querySelector('#season');
const img = document.querySelector('img');

// 1 вариант

// select.addEventListener('change', changeImg);

// function changeImg() {
   // img.src = select.value;
// }

// 2 вариант (arrow function)
select.onchange = () => img.src = select.value;

