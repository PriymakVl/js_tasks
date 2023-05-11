let selectedCards = [];
let cardCounter = 0;
const desk = document.querySelector('.desk');

createDesk();

function createDesk() {
  const names = [
      'diamond', 'diamond', 'bomb', 'bomb', 'bicycle', 'bicycle', 
      'leaf', 'leaf', 'anchor', 'anchor', 'bolt', 'bolt'
    ]
    let name, index, str = '';
    while (names.length) {
      index = Math.floor(Math.random() * names.length);
      name = names.splice(index, 1);
      str += `<li class="card" data-name="${name}"><i class="fa fa-${name}"></i></li>`;
    }
    desk.innerHTML = str;
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => card.onclick = cardOpen);

function cardOpen() {
  cardCounter++;
  this.classList.add('open');
  selectedCards.push(this); 
  if (cardCounter == 2) matchCards();
}

function matchCards() {
  if (selectedCards[0].dataset.name == selectedCards[1].dataset.name) {
    addClass('match', selectedCards);
  }
  else {
    replaceClass('close', selectedCards);
  }
  cardCounter = 0;
  selectedCards.length = 0;
}

function addClass(newClass, cards) {
  setTimeout(card => card.classList.add(newClass), 700, cards[0]);
  setTimeout(card => card.classList.add(newClass), 700, cards[1]);
}

function replaceClass(newClass, cards) {
  setTimeout(card => card.classList.replace('open', newClass), 700, cards[0]);
  setTimeout(card => card.classList.replace('open', newClass), 700, cards[1]);
  setTimeout(card => card.classList.remove('close'), 1000, cards[0]);
  setTimeout(card => card.classList.remove('close'), 1000, cards[1]);
}



