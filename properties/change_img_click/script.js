let catImg = document.querySelector('#cat');
let dogImg = document.querySelector('#dog');
let bigImg = document.querySelector('#big-img');

catImg.onclick = setCat;
dogImg.onclick = setDog;

function setCat() {
    bigImg.src = catImg.src;
}

function setDog() {
    bigImg.src = dogImg.src;
}
