const dogImg = document.querySelector('#dog');
const catImg = document.querySelector('#cat');
const mouseImg = document.querySelector('#mouse');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('#lightbox-img');

// Открыть лайтбокс
dogImg.onclick = openLightbox
catImg.onclick = openLightbox
mouseImg.onclick =openLightbox

// Закрыть лайтбокс при клике
lightboxImg.onclick = closeLightbox
  
function openLightbox() {
  lightboxImg.src = this.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}
