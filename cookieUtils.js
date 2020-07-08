export function isGuessCorrect(correctNumber, guessNumber) {
  if (correctNumber === guessNumber) return true;
  return false;
}

export function isGuessLow(correctNumber, guessNumber) {
  if (correctNumber > guessNumber) return true;
  return false;
}
