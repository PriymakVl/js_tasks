// Получаем ссылки на кнопку и квадрат
var btn = document.getElementById('btn');
var square = document.getElementById('square');

// Устанавливаем начальный цвет фона квадрата
var isGreen = false;

// Добавляем обработчик событий на клик по кнопке
btn.addEventListener('click', changeColor);

// Функция для изменения цвета фона квадрата
function changeColor() {
  if (isGreen) {
    square.style.backgroundColor = 'red';
	isGreen = false;
  } else {
    square.style.backgroundColor = 'green';
	isGreen = true;
  }
}
