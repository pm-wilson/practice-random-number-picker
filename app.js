// import functions and grab DOM elements
import { isGuessCorrect, isGuessLow } from "./cookieUtils";

const userGuessElement = document.querySelector("#user-guess"),
  userButtonElement = document.querySelector("#guess-button"),
  userHintElement = document.querySelector("#hint-output"),
  triesRemainingElement = document.querySelector("#tries-remaining");

// initialize state
let guessesRemaining = 4;
const computerNumber = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
userButtonElement.addEventListener("click", () => {
  if (guessesRemaining > 0) {
    const guessResponse = checkGuess(computerNumber);
  }
});
