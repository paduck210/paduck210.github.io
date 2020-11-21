import { showMesseage } from "./showMesseage.mjs";

let randomNumber = 1121;
const guesses = document.querySelector(".guesses");
const scoreContainer = document.querySelector(".score");
const score = document.querySelector(".score span");
const result = document.querySelector(".result");
const guessSubmit = document.querySelector(".guessSubmit");
const number = document.querySelector(".number");
const guessContainer = document.querySelector(".guessContainer");
let guessCount = 1;
document.querySelector(".container").setAttribute("draggable", false);

const checkGuess = () => {
  let userGuess = Number(number.value);
  guessContainer.style.display = "block";
  guesses.innerHTML += userGuess + " ";
  scoreContainer.style.display = "block";
  score.innerHTML = 100 - guessCount;

  if (guessCount > 0) {
    guessSubmit.innerText = "Retry Baby";
  }

  switch (true) {
    case userGuess === randomNumber:
      document.querySelector("body").innerHTML =
        "<div class='messageBox'><h2></h2></div>";
      document.querySelector("body").style.backgroundColor = "black";
      setTimeout(() => {
        showMesseage();
      }, 1000);
      break;
    case userGuess - randomNumber > 80:
      result.textContent = "Man, it's TOOOOO High! 😇";
      result.className = "result alert alert-danger";
      break;
    case userGuess - randomNumber > 50:
      result.textContent = "Still, it's too High! 🤯 ";
      result.className = "result alert alert-danger";
      break;
    case userGuess - randomNumber > 25:
      result.textContent = "Oh, it's still a bit High! 😳";
      result.className = "result alert alert-secondary";
      break;
    case userGuess - randomNumber > 5:
      result.textContent = "Close! Still little High! 😘";
      result.className = "result alert alert-warning";
      break;
    case userGuess - randomNumber >= 1:
      result.textContent = "Almooooost, bit bit High😜";
      result.className = "result alert alert-success";
      break;
    case userGuess - randomNumber < 80:
      result.textContent = "Gosh, it's TOOOOO Low! 😨";
      result.className = "result alert alert-danger";
      break;
    case userGuess - randomNumber < 50:
      result.textContent = "Still, it's too Low 🤤";
      result.className = "result alert alert-danger";
      break;
    case userGuess - randomNumber < 25:
      result.textContent = "Oh, it's still a bit Low! 😭";
      result.className = "result alert alert-secondary";
      break;
    case userGuess - randomNumber < 15:
      result.textContent = "Close! Still little Low! 🤓";
      result.className = "result alert alert-warning";
      break;
    case userGuess - randomNumber <= 1:
      result.textContent = "Almooooost, bit bit Low 😎";
      result.className = "result alert alert-success";
      break;
    default:
  }
  guessCount++;
};

const gameStart = () => {
  guessSubmit.addEventListener("click", checkGuess);
};

export { gameStart };
