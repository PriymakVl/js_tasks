const select = document.querySelector('#num');
const blocks = document.querySelectorAll('.block');

select.onchange = setNum;

function setNum() {
	if (this.value == 'reset') {
		blocks.forEach(block => block.innerText = 'Блок');
	} 
	else {
		let num = this.value;
		let index = num - 1;
		blocks[index].innerText = num;
	}
}





