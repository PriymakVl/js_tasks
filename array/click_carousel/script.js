const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const imgsEl = document.querySelectorAll(".img-carousel");
const imageContainerEl = document.querySelector(".img-wrp");
const navItems = document.querySelectorAll('.nav-item');
let offset = 0;
let idxNav = 0;

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

function nextSlide() {
	if (offset == (imgsEl.length - 1) * 500) return;
	offset += 500;
	imageContainerEl.style.left = -offset + 'px';
	navSlide(++idxNav);
}

function prevSlide() {
	if (offset == 0) return;
	offset -= 500;
	imageContainerEl.style.left = -offset + 'px';
	navSlide(--idxNav);
}

function navSlide(idx) {
	navItems.forEach(item => item.style.backgroundColor = '#aebfac');
	navItems[idx].style.backgroundColor = '#FA8072';
}

