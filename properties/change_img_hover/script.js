let img = document.getElementById('image');

img.onmouseover = changeCat;
img.onmouseout = changeDog;

function changeCat() {
	img.src = 'img/cat.jpg';
}

function changeDog() {
	img.src = 'img/dog.jpg';
}