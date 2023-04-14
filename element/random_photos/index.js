const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", addNewImages);

function addNewImages() {
  let numImg = 4;
  let randomImg;
  let maxImg = 2000;

  for (let index = 1; index <= numImg; index++) {
    const newImgEl = document.createElement("img");
    randomImg = Math.floor(Math.random() * maxImg);
    newImgEl.src = 'https://picsum.photos/300?random=' + randomImg;
    imageContainerEl.appendChild(newImgEl);
  }
}
