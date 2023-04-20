let input = document.querySelector("#number");
let btn = document.querySelector(".btn");
let check = document.querySelector(".result");
let help = document.querySelector(".help");
let count = document.querySelector(".count");
let maxItem = 10;
let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);
let userNum;

btn.onclick = function () {
  if (item >= maxItem) return alert('Вы проиграли')
  count.textContent = ++item;
  userNum = input.value;
  if (userNum > randNum) {
    check.textContent = "Пока что не угадали";
    help.textContent = "Многовато будет";
  } else if (userNum < randNum) {
    check.textContent = "Пока что не угадали";
    help.textContent = "Маловато будет";
  } else {
    check.textContent = "Поздравляю! Вы угадали число";
    help.textContent = "В самый раз";
    item = 0;
    randNum = 1 + Math.floor(Math.random() * 100);
    alert('Вы победили!! Можете ещё сыграть');
  }
};