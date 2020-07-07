// IMPORT MODULES under test here:
// import example from '../example.js';
import { isGuessCorrect, isGuessLow } from "../cookieUtils.js";

const test = QUnit.test;

test("isGuessCorrect should return true if both numbers are equal", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const correctNum = 1;
  const guessNum = 1;
  const correctNum2 = 5;
  const guessNum2 = 5;
  const correctNum3 = 1;
  const guessNum3 = 5;
  const correctNum4 = 11;
  const guessNum4 = 19;

  const expected = true;
  const expected2 = true;
  const expected3 = false;
  const expected4 = false;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = isGuessCorrect(correctNum, guessNum);
  const actual2 = isGuessCorrect(correctNum2, guessNum2);
  const actual3 = isGuessCorrect(correctNum3, guessNum3);
  const actual4 = isGuessCorrect(correctNum4, guessNum4);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
  expect.equal(actual2, expected2);
  expect.equal(actual3, expected3);
  expect.equal(actual4, expected4);
});

test("isGuessLow should return true if the guess number is lower than the correct num (equal doesnt matter at this time so will return false)", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const correctNum = 10;
  const guessNum = 1;
  const correctNum2 = 15;
  const guessNum2 = 8;
  const correctNum3 = 1;
  const guessNum3 = 1;
  const correctNum4 = 11;
  const guessNum4 = 19;

  const expected = true;
  const expected2 = true;
  const expected3 = false;
  const expected4 = false;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = isGuessLow(correctNum, guessNum);
  const actual2 = isGuessLow(correctNum2, guessNum2);
  const actual3 = isGuessLow(correctNum3, guessNum3);
  const actual4 = isGuessLow(correctNum4, guessNum4);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
  expect.equal(actual2, expected2);
  expect.equal(actual3, expected3);
  expect.equal(actual4, expected4);
});
