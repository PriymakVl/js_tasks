const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const imgsEl = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".image-container");
let currentImg = 0;
let timeout;

startBtn.onclick = startSlider;
stopBtn.onclick = stopSlider;

function startSlider() {
  currentImg++;
  if (currentImg == imgsEl.length) currentImg = 0;
  imageContainerEl.style.transform = `translateX(-${(currentImg) * 500}px)`;
  timeout = setTimeout(updateImg, 3000);
}

function stopSlider() {
  clearTimeout(timeout);
  currentImg = 0;
  imageContainerEl.style.transform = `translateX(-${(currentImg) * 500}px)`;
}
