let i = 0;
let text = "Welcome To DarkCode";
let textEl = document.getElementById('text');

function print() {
	if(i < text.length){
		textEl.innerHTML += text[i];
		i++;
		setTimeout(print, 200);
	}
}

print();
