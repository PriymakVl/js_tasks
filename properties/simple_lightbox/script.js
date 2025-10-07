const thumbs = document.querySelectorAll('.thumb');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Открыть лайтбокс
thumbs.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

// Закрыть лайтбокс при клике
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
