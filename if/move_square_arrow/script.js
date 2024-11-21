const square = document.getElementById('square');
let leftPos = 0;
let topPos = 0;

document.onkeydown = moveSquare;


function moveSquare(event) {
  let key = event.key;

  if (key == 'ArrowRight') {
    leftPos += 50;
    square.style.left = leftPos + 'px';
  } else if (key == 'ArrowLeft') {
    leftPos -= 50;
    square.style.left = leftPos + 'px';
  } else if (key == 'ArrowDown') {
    topPos += 50;
    square.style.top = topPos + 'px';
  } else if (key == 'ArrowUp') {
    topPos -= 50;
    square.style.top = topPos + 'px';
  }
}

