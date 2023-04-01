function clock() {
	let time = new Date();
	let hr = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();

	hr = addZero(hr);
	min = addZero(min);
	sec = addZero(sec);

	document.getElementById('clock').innerText = hr + ":" + min + ":" + sec;
}


function addZero(num) {
	return (num < 10) ? '0' + num : num;
}

setInterval(clock, 1000);