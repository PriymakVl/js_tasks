let btn = document.getElementById('btn');
let square = document.getElementById('square');

let bg = 'red';


btn.addEventListener('click', changeBg);


function changeBg() {
  if (bg == 'red') {
    square.style.backgroundColor = 'green';
	  bg = 'green';
  } 
  else if (bg == 'green') {
    square.style.backgroundColor = 'blue';
	  bg = 'blue'
  }
  else {
    square.style.backgroundColor = 'red';
	  bg = 'red'
  }
}
