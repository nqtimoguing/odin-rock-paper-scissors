
const buttons = document.querySelectorAll(".choices button");
const result = document.querySelector(".result");

let userScore = 0;
let compScore = 0;
let finalScore = 5;

const playChoice = ["rock", "paper", "scissors"];

// Computer play random logic
function getComputerChoice() {
  return playChoice[Math.floor(Math.random() * playChoice.length)];
}

// Game round
function playRound(playerSelection, computerSelection) {

  computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
  }
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result.textContent = `You win, ${playerSelection} beats ${computerSelection}!`;
    userScore += 1;
  }
  else {
    result.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`;
    compScore += 1;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    updateScore();
    checkWinner();

    if (checkWinner()) {
      userScore = 0;
      compScore = 0;
      updateScore();
    }

    });
});

function updateScore() {
  document.getElementById("player-score").textContent = userScore;
  document.getElementById("computer-score").textContent = compScore;
}

function checkWinner() {
  if (userScore === finalScore || compScore === finalScore) {
    const winner = userScore === finalScore
      ? result.textContent = "You win the game! Congratulations!"
      : result.textContent = "Computer wins the game! Try again!";
    result.textContent = `${winner}`;
    return true;
  }
  return false;
}

