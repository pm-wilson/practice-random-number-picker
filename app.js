// import functions and grab DOM elements
import { isGuessCorrect, isGuessLow } from "./cookieUtils.js";

const userGuessElement = document.querySelector("#user-guess"),
  userButtonElement = document.querySelector("#guess-button"),
  userHintElement = document.querySelector("#hint-output"),
  triesRemainingElement = document.querySelector("#tries-remaining"),
  cookiePicture = document.querySelector("#cookie-picture"),
  curtainBox = document.querySelector("#curtain-picture");

// initialize state
let guessesRemaining = 4;
const computerNumber = Math.ceil(Math.random() * 20);
console.log(computerNumber);

// set event listeners to update state and DOM
userButtonElement.addEventListener("click", () => {
  if (guessesRemaining > 0) {
    const userGuess = Number(userGuessElement.value),
      correctGuess = isGuessCorrect(computerNumber, userGuess);

    if (correctGuess) {
      //when user guesses correct
      userGuessCorrect(userGuess);
    } else {
      //when user guesses wrong
      userGuessWrong(userGuess);
    }
  }
});

function userGuessWrong(userGuess) {
  const lowGuess = isGuessLow(computerNumber, userGuess);

  //give user a hint
  giveUserHint(lowGuess);

  //update tries remaining
  decrementTriesRemaining();
}

function giveUserHint(lowGuess) {
  if (lowGuess) {
    userHintElement.textContent = "Your guess is too low \n";
  } else {
    userHintElement.textContent = "Your guess is too high \n";
  }
}

function decrementTriesRemaining() {
  //update state
  guessesRemaining--;

  //update message
  if (guessesRemaining === 1) {
    triesRemainingElement.textContent = "You have one last try for the cookies";
  } else {
    triesRemainingElement.textContent =
      "You have " + guessesRemaining + " tries left";
  }

  //clear input
  userGuessElement.value = "";
}

function userGuessCorrect(userGuess) {
  //lock user input
  guessesRemaining = 0;

  //update message to user
  userHintElement.textContent =
    "Well done! Please enjoy these " + userGuess + " cookies!";
  triesRemainingElement.textContent = "";

  //animate curtain
  animateCurtain(userGuess);
}

function animateCurtain(userGuess) {
  curtainBox.classList.add("animate-curtain");
}

function setCookiePicture() {
  cookiePicture.style.backgroundImage =
    "url('./assets/" + computerNumber + "Cookies.jpg')";
}

setCookiePicture();
