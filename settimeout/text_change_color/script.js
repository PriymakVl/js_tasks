i = 0;
const btnEl = document.querySelector('.btn');
const textEl = document.querySelector('#text');
let timerId;
let included = false;
let colors = ["red", "green", "blue"];

btnEl.onclick = () => {
    if (included == false) {
        changeColor();
        included = true;
        btnEl.textContent = 'Остановить скрипт';
    }
    else {
        clearTimeout(timerId);
        textEl.style.color = 'black';
        btnEl.textContent = 'Запустить скрипт';
    }
}

function changeColor() {
	if (i == colors.length) {
		i = 0;
	}
    textEl.style.color = colors[i];
	i++ ;
	timerId = setTimeout(changeColor, 2000);
}

