const box = document.querySelector('.box');
const widthRange = document.querySelector('.width-range');
const heightRange = document.querySelector('.height-range');

widthRange.onchange = changeWidth;
heightRange.onchange = changeHeight;

function changeWidth() {
  box.style.width = widthRange.value + 'px';
}

function changeHeight() {
  box.style.height = heightRange.value + 'px';
}

// widthRange.addEventListener('input', () => {
//   box.style.width = widthRange.value + 'px';
// });

// heightRange.addEventListener('input', () => {
//   box.style.height = heightRange.value + 'px';
// });


