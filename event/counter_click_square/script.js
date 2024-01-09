let square = document.querySelector(".square");
let points = document.querySelector(".points");

let i = 0;

square.onclick = function() {
	i++;
	points.innerText = i;

	let red = Math.random() * 255;
	let green = Math.random() * 255;
	let blue = Math.random() * 255;
	this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

	this.style.transform = 'translate(0, 0)';
	this.style.top = Math.random() * 420 + "px";
	this.style.left = Math.random() * 420 + "px";
}