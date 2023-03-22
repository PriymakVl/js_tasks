const countersEl = document.querySelectorAll(".counter");

for (let i = 0; i < countersEl.length; i++) {
    countersEl[i].innerText = '0';
    incrementCounter(countersEl[i]);
}

function incrementCounter(item) {
	let currentNum = +item.innerText;
	const maxValue = item.getAttribute('data-ceil');
	const increment = maxValue / 15;
	currentNum = Math.ceil(currentNum + increment);

	if(currentNum < maxValue) {
		item.innerText = currentNum;
		setTimeout(incrementCounter, 60, item);
	} else {
		item.innerText = maxValue;
	}
}

    

