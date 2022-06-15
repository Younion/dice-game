window.onload = dice;

var diceArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

function dice() {

  var randomNumber1 = Math.floor(Math.random() * diceArray.length);
  var randomNumber2 = Math.floor(Math.random() * diceArray.length);

  document.querySelector(".img1").src = diceArray[randomNumber1];
  document.querySelector(".img2").src = diceArray[randomNumber2];

  if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩";
  }

}
