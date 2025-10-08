const allBtn = document.querySelector('.buttons #all');
const carBtn = document.querySelector('.buttons #cars');
const natureBtn = document.querySelector('.buttons #nature');
const images = document.querySelectorAll('.content img');


// Displays all the images.
allBtn.addEventListener('click', () => images.forEach(img => img.style.display = 'block'));

// Displays all the car images.
carBtn.addEventListener('click', () => showImages('car'));

// Displays all the nature images.
natureBtn.addEventListener('click', () => showImages('nature'));

function showImages(altName) {
    images.forEach(img => img.style.display = (img.alt == altName) ? 'block' : 'none')
}



