let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.ceil(Math.random() * 9);
};

const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (
    getAbsoluteDistance(targetNumber, userGuess) <
    getAbsoluteDistance(targetNumber, computerGuess)
  ) {
    return true;
  } else if (
    getAbsoluteDistance(targetNumber, userGuess) ===
    getAbsoluteDistance(targetNumber, computerGuess)
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
