const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
let isHidden = false

btn.onclick = changeVisibility;

function changeVisibility() {
	if (isHidden == false) {
		box.style.display = 'none';
		btn.innerText = 'Показать квадрат';
        isHidden = true;
	}
	else {
		box.style.display = 'block';
		btn.innerText = 'Скрыть квадрат';
        isHidden = false;
	}
}


