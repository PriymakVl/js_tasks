const header = document.querySelector('.header');
const icon = document.querySelector('.icon');
const headerText = document.querySelector('.header-text');
const content = document.querySelector('.content');
let isOpen = true;

header.onclick = toggle;

function toggle() {
  if (isOpen == true) {
    headerText.innerHTML = 'Открыть';
    icon.innerHTML = '+';
    content.style.display = 'none';
    isOpen = false;
  }
  else {
    headerText.innerHTML = 'Закрыть';
    icon.innerHTML = '-';
    content.style.display = 'block';
    isOpen = true;
  }
}