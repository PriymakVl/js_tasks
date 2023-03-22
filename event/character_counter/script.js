const textareaEl = document.querySelector(".textarea");
const totalCounterEl = document.querySelector(".total-counter");
const remainingCounterEl = document.querySelector(".remaining-counter");
const maxLength = 10;

textareaEl.onkeyup = updateCounter;

function updateCounter() {
  let strLength = textareaEl.value.length;
  totalCounterEl.innerText = strLength;
  remainingCounterEl.innerText = maxLength - strLength;
}
