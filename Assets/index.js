
let player = {
  name:"Ayan",
  chips:145
}
let cards = []; //array --- ordered list of items

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.getElementById("sum-el");
// let sumEL = document.querySelector(".sum-el");

let cardsEL = document.getElementById("cards-el");


let playerEl = document.getElementById("player-el");
playerEl.textContent=player.name + " :$"+player.chips;

function getRandomCard(){

  let randomCard = Math.floor(Math.random()*13 + 1);
  if(randomCard === 1)
  return 11;
  else if(randomCard === 11 ||randomCard === 12||randomCard === 13 )
  return  10;

  return randomCard;
}


function startGame(){

  if(isAlive == false){
    sum = 0;
    cards.length = 0;
  renderGame();

  }
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards.push(firstCard);
  cards.push(secondCard);
  sum = cards[0]+cards[1];
  renderGame();
}

function renderGame() {
// render out first card and second card
 cardsEL.textContent = "Cards : " ;

 for(let i = 0;i<cards.length;i++){
  cardsEL.textContent += cards[i] + " ";
 }

 // render out all cards
  sumEl.textContent ="Sum : " + sum;
  if (sum <= 20) {
    message = "Dou you want to draw a new Card ";
  } else if (sum === 21) {
    message = "You got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "Your are out of the game";
    isAlive = false;
    
  }
  messageEl.textContent = message;
}

function newCard(){

  if(isAlive === true && hasBlackJack === false)
  {
    let card = getRandomCard();
  cards.push(card);
  sum+=card;

  renderGame();

  }
}
