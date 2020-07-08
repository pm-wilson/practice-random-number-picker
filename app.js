// import functions and grab DOM elements
import { isGuessCorrect, isGuessLow } from "./cookieUtils.js";

const userGuessElement = document.querySelector("#user-guess"),
  userButtonElement = document.querySelector("#guess-button"),
  userHintElement = document.querySelector("#hint-output"),
  triesRemainingElement = document.querySelector("#tries-remaining"),
  cookiePicture = document.querySelector("#cookie-picture"),
  curtainBox = document.querySelector("#curtain-picture"),
  resetButton = document.querySelector("#reset-screen");

// initialize state
let guessesRemaining = 4,
  computerNumber = Math.ceil(Math.random() * 20);
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
      checkForLoss();
    }
    //clear input
    userGuessElement.value = "";
  }
});

resetButton.addEventListener("click", () => {
  //hide reset screen
  resetButton.classList.add("hidden");

  resetGame();
});

cookiePicture.addEventListener("click", () => {
  resetGame();
});

function userGuessWrong(userGuess) {
  const lowGuess = isGuessLow(computerNumber, userGuess);

  //give user a hint
  giveUserHint(lowGuess);

  //update tries remaining
  removeElement("cookie" + guessesRemaining);
  decrementTriesRemaining();
}

function giveUserHint(lowGuess) {
  if (lowGuess) {
    userHintElement.textContent = "Your guess was too low \n";
  } else {
    userHintElement.textContent = "Your guess was too high \n";
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

function animateCurtain() {
  curtainBox.classList.add("animate-curtain");
}

function setCookiePicture() {
  cookiePicture.style.backgroundImage =
    "url('./assets/" + computerNumber + "Cookies.jpg')";
}

function checkForLoss() {
  if (guessesRemaining === 0) {
    //remove hidden class
    resetButton.classList.remove("hidden");
  }
}

function removeElement(elementId) {
  const removeThis = document.getElementById(elementId);

  removeThis.classList.add("hidden");
}

function addElement(elementId) {
  const addThis = document.getElementById(elementId);

  addThis.classList.remove("hidden");
}

function initializeGame() {
  setCookiePicture();

  //hide reset screen
  resetButton.classList.add("hidden");
}

function resetGame() {
  //reset number
  computerNumber = Math.ceil(Math.random() * 20);
  console.log(computerNumber);

  //reset guess count
  guessesRemaining = 4;

  //remove remaining cookies
  for (var i = 1; i <= 4; i++) {
    removeElement("cookie" + i);
  }

  //add cookies
  for (var i = 1; i <= 4; i++) {
    addElement("cookie" + i);
  }

  //hide curtain
  curtainBox.classList.remove("animate-curtain");

  //update user messages
  userHintElement.textContent = "Bing on your guessing skillz";
  triesRemainingElement.textContent = "You have 4 tries remaining...";
}

initializeGame();
