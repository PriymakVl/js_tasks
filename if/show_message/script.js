const btn = document.querySelector('.btn');
const message = document.querySelector('.message');
let isHidden = false;

btn.onclick = showMessage;

function showMessage() {
	if (isHidden == false) {
		message.style.top = '50px';
		isHidden = true;
		btn.textContent = 'Hidden Message';
		btn.style.backgroundColor = 'coral';
	}
	else {
		message.style.top = '-300px';
		isHidden = false;
		btn.textContent = 'Show Message';
		btn.style.backgroundColor = 'green';
	}
}