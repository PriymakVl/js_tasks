let galleryImg = document.querySelectorAll('.lightbox-gallery img');
let lightbox = document.querySelector('.lightbox');
let lightboxImg = document.querySelector('.lightbox img');

galleryImg.forEach(img => img.onclick = showImage);

lightbox.onclick = () => lightbox.classList.remove('show');

function showImage() {
  lightboxImg.src = 'img/original/' + this.dataset.file;
  lightbox.classList.add('show');
}

 