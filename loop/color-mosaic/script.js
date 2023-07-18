const instructionsBtn = document.getElementById('instructions-btn');
const instructions = document.getElementById('instructions');
const closeBtn = document.getElementById('close-btn');
const resetAllBtn = document.getElementById('reset-all-btn');
const surfaceArea = document.getElementById('surface-area');

for (let i = 1; i <= 240; i++) {
  surfaceArea.innerHTML += '<div class="circle"></div>';
}

surfaceArea.addEventListener('click', addColor);
surfaceArea.addEventListener('dblclick', removeColor);
instructionsBtn.addEventListener('click', () => instructions.style.display = 'block');
closeBtn.addEventListener('click', () => instructions.style.display = 'none');

resetAllBtn.addEventListener('click', () => {
  const allCircles = document.querySelectorAll('.circle');
  allCircles.forEach(div => {
    div.style.backgroundColor = 'black';
    div.style.borderColor = 'blue';
  })
});
  
function addColor(e) {
  if (e.target.classList.contains('circle')) {
    let color = document.querySelector('input:checked');
    if (!color) return alert('No color selected');
    e.target.style.backgroundColor = color.id;
    e.target.style.borderColor = color.id;
  }
}

function removeColor(e) {
  e.target.style.backgroundColor = 'black';
  e.target.style.borderColor = 'blue';
}

