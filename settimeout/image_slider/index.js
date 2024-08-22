const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const images = document.querySelectorAll(".image-container img");
let currentImg = 0;
let timeout;

startBtn.onclick = startSlider;
stopBtn.onclick = stopSlider;

function startSlider() {
  images[currentImg].style.opacity = 0;
  currentImg++;
  if (currentImg == images.length) {
    currentImg = 0;
  }
  images[currentImg].style.opacity = 1
  timeout = setTimeout(startSlider, 6000);
}

function stopSlider() {
  clearTimeout(timeout);
  images[currentImg].style.opacity = 0;
  images[0].style.opacity = 1
  currentImg = 0;
}
