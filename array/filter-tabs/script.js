const allBtn = document.querySelector('.buttons #all');
const carBtn = document.querySelector('.buttons #cars');
const natureBtn = document.querySelector('.buttons #nature');
const allImages = document.querySelectorAll('.content img');
const modal = document.querySelector('.modal');

// Displays all the images.
allBtn.addEventListener('click', () => showImages());

// Displays all the car images.
carBtn.addEventListener('click', () => showImages('car'));

// Displays all the nature images.
natureBtn.addEventListener('click', () => showImages('nature'));

function showImages(className) {
    if (!className) return allImages.forEach(img => img.style.display = 'block');
    allImages.forEach(img => {
        if (img.className == className) img.style.display = 'block';
        else img.style.display = 'none';
    })
}

// Showing a pop when clicking the images.
allImages.forEach(img => {
    img.addEventListener('click', (e)=>{
        modal.style.display = 'flex';
        document.querySelector('.modal img').src  = e.target.src;
    });
});

// closing the Popup.
modal.addEventListener('click', (e) => {
    const modalImg = modal.querySelector('img');
    if(e.target != modalImg) modal.style.display = 'none';
});

