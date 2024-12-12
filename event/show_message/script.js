const btn = document.querySelector('.btn');
const message = document.querySelector('.message');

btn.onclick = showMessage;

function showMessage() {
	message.style.top = '50px';
}