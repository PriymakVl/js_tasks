// 1 вариант

// document.onclick = function(event){
	// console.log(event.target.tagName);
	// event = event || window.event;
	// if (event.target.tagName == 'IMG'){
		// event.target.classList.add('bordered');
	// }
// }


// 2 вариант
// Важно IMG писать в верхнем регистре

document.addEventListener('click', addBorder);

function addBorder(event) {
	if (event.target.tagName == 'IMG') {
		event.target.classList.add('bordered');
	}
}

// 3 вариант
const imgs = document.querySelectorAll('img');

imgs[0].onclick = addBorder;
imgs[1].onclick = addBorder;
imgs[2].onclick = addBorder;

function addBorder() {
	this.classList.add('bordered');
}

// for (let i = 0; i < imgs.length; i++) {
// 	imgs[i].onclick = () => img[i].classList.add('bordered');
// }