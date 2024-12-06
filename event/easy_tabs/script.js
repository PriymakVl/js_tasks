const tabToggler1 = document.querySelector('#toggler-1');
const tabToggler2 = document.querySelector('#toggler-2');
const tab1 = document.querySelector('#tab-1');
const tab2 = document.querySelector('#tab-2');

tabToggler1.onclick = showTab1
tabToggler2.onclick = showTab2

function showTab1() {
  tab1.style.display = 'block';
  tab2.style.display = 'none';
  tabToggler1.style.backgroundColor = '#fff';
  tabToggler2.style.backgroundColor = '#ddd';
}

function showTab2() {
  tab1.style.display = 'none';
  tab2.style.display = 'block';
  tabToggler1.style.backgroundColor = '#ddd';
  tabToggler2.style.backgroundColor = '#fff';
}