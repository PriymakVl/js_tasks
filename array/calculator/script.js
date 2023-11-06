const result = document.querySelector('.result');
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.opperator');
const btnEqual = document.getElementById('equal');
const btnClear = document.getElementById('clear');


btnClear.onclick = () => result.innerHTML = '';

btnEqual.onclick = () => { result.innerHTML = eval(result.innerHTML) };

btnNumbers.forEach(function(btn) {
  btn.onclick = function() {
    result.innerHTML += this.innerHTML;
  }
})

btnOperators.forEach(function(btn) {
  btn.onclick = function() {
    result.innerHTML += ' ' + this.innerHTML + ' ';
  }
})






