const solidRadio = document.querySelector('#solid');
const dashedRadio = document.querySelector('#dashed');
const dottedRadio = document.querySelector('#dotted');
const box = document.querySelector('.box');

solidRadio.onchange = setBorder;
dashedRadio.onchange = setBorder;
dottedRadio.onchange = setBorder;

function setBorder() {
    box.style.borderStyle = this.value;
}