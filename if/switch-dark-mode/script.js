const toogleCheckbox = document.querySelector('#darkmode-toggle');
const body = document.body;
const imgSun = document.querySelector('.sun');
const imgMoon = document.querySelector('.moon');
const title = document.querySelector('.title');

toogleCheckbox.addEventListener('change', toggleDarkMode);

function toggleDarkMode() {
    if (this.checked == true) {
        imgSun.src = 'img/sun-light.svg';
        imgMoon.src = 'img/moon-light.svg';
        body.style.backgroundColor = '#242424';
        title.style.color = '#fff';
    }
    else {
        imgSun.src = 'img/sun-dark.svg';
        imgMoon.src = 'img/moon-dark.svg';
        body.style.backgroundColor = '#fff'
        title.style.color = '#000';
    }
}
