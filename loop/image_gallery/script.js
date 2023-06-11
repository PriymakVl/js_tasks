const images = document.querySelectorAll('.img-box img');
const modal = document.querySelector('.modal');
const content = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const caption = document.querySelector('.caption');
let imgIndex;


function displayImg(index) {
    imgIndex = index;
    if (imgIndex == images.length) imgIndex = 0;
    if (imgIndex < 0) imgIndex = images.length - 1;
    content.src = images[imgIndex].src;
    caption.textContent = images[imgIndex].alt;
}  

for (let i = 0; i < images.length; i++) {
  images[i].onclick = () => {
    modal.hidden = false;
    displayImg(i);
  };
}

closeBtn.onclick = () => modal.hidden = true;

prevBtn.onclick = () => { displayImg(--imgIndex); }

nextBtn.onclick = () => { displayImg(++imgIndex); }



