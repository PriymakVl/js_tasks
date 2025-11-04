const catItem = document.querySelector("#cat");
const dogItem = document.querySelector("#dog");
const mouseItem = document.querySelector("#mouse");
const img = document.querySelector('img');

catItem.onclick = changeImg
dogItem.onclick = changeImg
mouseItem.onclick = changeImg

function changeImg() {
    let file = this.getAttribute('data-file');
    // Вариант получения значения нестандартного атрибута
    // let file = this.dataset.file;
    img.src = 'img/' + file;
    setActiveColor(this);
}

function setActiveColor(activeItem) {
    catItem.style.color = 'black';
    dogItem.style.color = 'black';
    mouseItem.style.color = 'black';
    activeItem.style.color = 'red';
}