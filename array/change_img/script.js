let btn = document.querySelector('.next');
let img = document.getElementById('img');
let i = 0;

btn.onclick = nextImg;

    
function nextImg() {
    let arr = ['img/dog.jpg', 'img/banana.jpg', 'img/rouse.png'];
    i++;
    if (i == arr.length) {
        i = 0;
    }
    img.src = arr[i];
}