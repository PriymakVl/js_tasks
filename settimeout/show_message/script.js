const btn = document.querySelector('.btn');
const message = document.querySelector('.message');

btn.onclick = showMessage;

function showMessage() {
	message.style.top = '50px';
	setTimeout(hiddenMessage, 2000);
}

function hiddenMessage() {
	message.style.top = '-300px';
}