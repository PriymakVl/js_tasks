const list = document.querySelector(".list");
const img = document.querySelector('img');

list.onclick = changeImg

function changeImg(event) {
    let item = event.target;
    img.src = item.getAttribute('data-src');
    // img.src = item.dataset.src;
}