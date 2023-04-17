let btn = document.querySelector('.btn');
let num = 0;
let out = document.querySelector('.out');

btn.onclick = counter;



function counter() {
    num = num + 1;
    out.innerText = num;
}