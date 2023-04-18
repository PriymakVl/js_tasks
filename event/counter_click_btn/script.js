let num = 0;
const value = document.querySelector(".value");
const plusEl = document.querySelector('.plus');
const minusEl = document.querySelector('.minus');
const resetEl = document.querySelector('.reset');

// plusEl.onclick = function() { value.innerText = ++num; }
// minusEl.onclick = function() { value.innerText = --num; }
// resetEl.onclick = function() { value.innerText = 0; }

plusEl.onclick = () =>  value.innerText = ++num;
minusEl.onclick = () => value.innerText = --num;
resetEl.onclick = () => value.innerText = 0;