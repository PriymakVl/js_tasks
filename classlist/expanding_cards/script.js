const panels = document.querySelectorAll('.panel')


// 1 вариант

// panels.forEach(panel => {
    // panel.addEventListener('click', () => {
        // removeActiveClasses()
        // panel.classList.add('active')
    // })
// })

// function removeActiveClasses() {
    // panels.forEach(panel => {
        // panel.classList.remove('active')
    // })
// }

// 2 вариант

for (let i = 0; i < panels.length; i++) {
	panels[i].addEventListener('click', changePanel);
}

function changePanel() {
	removeClass();
	this.classList.add('active');
}

function removeClass() {
	for (let j = 0; j < panels.length; j++) {
		panels[j].classList.remove('active');
	}
}
