let input = document.querySelector('input');

input.onblur = addBorder;

function addBorder() {
    let num = input.value.length;
    // let length = input.dataset.length;
    let length = input.getAttribute('data-length');
    num = Number(num);
    length = Number(length);
    if (num == length) {
        input.style.borderColor = 'green';
    }
    else {
        input.style.borderColor = 'red';
    }
}