// Global variables
const computerSelection = computerPlay();
const playerSelection = playerPlay();
// Score counters
let playerScore = 0;
let computerScore = 0;
let draw = 0;

// Player picks an option
function playerPlay() {
  let playerInput = prompt("Enter you selection: 'rock - paper - scissors' ");
  // Format players input
  let playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.substring(1, playerInput.length).toLowerCase();
  return playerChoice;
}

// Computer randomly picks an option
function computerPlay() {
  let game = ['Rock', 'Paper', 'Scissors'];
  let i = Math.floor((Math.random() * 2));
  let computerChoice = game[i];
  return computerChoice;
}


// Game play
function playRound(playerSelection, computerSelection) {
  // Start with checking if its a tie
  if (computerSelection === playerSelection) {
    return "Tie";
    // Check if player wins
  } else if (computerSelection == "Rock" && playerSelection == "Paper" ||
    computerSelection == "Scissors" && playerSelection == "Rock" ||
    computerSelection == "Paper" && playerSelection == "Scissors") {
    console.log(`${playerSelection} beats ${computerSelection}, Player Wins!`);
    return "You Win!";
    // Check if computer wins
  } else {
    console.log(`${computerSelection} beats ${playerSelection}, Computer Wins!`);
    return "You Lose!";
  }
}

playRound(playerSelection, computerSelection);