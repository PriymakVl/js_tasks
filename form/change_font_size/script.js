const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.oninput = changeSizeText;

function changeSizeText() {
    let num = range.value;
    text.style.fontSize = num + 'px';
}