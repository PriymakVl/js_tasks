
const nav = document.querySelector('.nav');
const navOpenIcon = document.querySelector('#open-nav');
const navCloseIcon = document.querySelector('#close-nav');

navOpenIcon.onclick = showMenu
navCloseIcon.onclick = hiddenMenu

function showMenu() {
    navCloseIcon.style.display = 'block';
    navOpenIcon.style.display = 'none';
    nav.style.top = '60px';
}

function hiddenMenu() {
    navCloseIcon.style.display = 'none';
    navOpenIcon.style.display = 'block';
    nav.style.top = '-260px';
}