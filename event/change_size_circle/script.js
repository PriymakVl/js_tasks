const smallBtn = document.querySelector('.small');
const mediumBtn = document.querySelector('.medium');
const largeBtn = document.querySelector('.large');
const circle = document.querySelector('.circle');
  
smallBtn.addEventListener('click', setSmallCircle);
mediumBtn.addEventListener('click', setMediumCircle);
largeBtn.addEventListener('click', setLargeCircle);

function setSmallCircle() {
  circle.style.transform = 'scale(.6)';
  clearStyleButtons();
  smallBtn.style.color = '#BB99FF';
  smallBtn.style.backgroundColor = '#fffde7';
}

function setMediumCircle() {
  circle.style.transform = 'scale(.8)';
  clearStyleButtons();
  mediumBtn.style.color = '#BB99FF';
  mediumBtn.style.backgroundColor = '#fffde7';
}

function setLargeCircle() {
  circle.style.transform = 'scale(1)';
  clearStyleButtons();
  largeBtn.style.color = '#BB99FF';
  largeBtn.style.backgroundColor = '#fffde7';
}

function clearStyleButtons() {
  smallBtn.style.color = '#fffde7';
  smallBtn.style.backgroundColor = 'transparent';
  mediumBtn.style.color = '#fffde7';
  mediumBtn.style.backgroundColor = 'transparent';
  largeBtn.style.color = '#fffde7';
  largeBtn.style.backgroundColor = 'transparent';
}


