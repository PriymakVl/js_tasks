const select = document.querySelector('#num');
const blocks = document.querySelectorAll('.block');

select.onchange = setNum;

function setNum() {
	let num = this.value;
	let index = num - 1;
	blocks[index].innerText = num;
	blocks[index].style.fontSize = '2rem';
}

