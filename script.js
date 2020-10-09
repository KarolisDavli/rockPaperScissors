// Global values

// Player Input
const playerInput = prompt("Enter you selection: 'rock - paper - scissors' ");
// Format players input
const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.substring(1, playerInput.length).toLowerCase();
const computerSelection = computerPlay();


// Computer randomly picks an option
function computerPlay() {
  let game = ['Rock', 'Paper', 'Scissors'];
  let i = Math.floor((Math.random() * 3) + 1);
  let computerChoice = game[i];
  return computerChoice;
}


// Game play
function playRound(playerSelection, computerSelection) {

  // Start with checking if its a tie
  if (computerSelection == playerSelection) {
    console.log("It's a tie");
    // Check if condition is met for player to win
  } else if (computerSelection == "Rock" && playerSelection == "Paper" ||
    computerSelection == "Scissors" && playerSelection == "Rock" ||
    computerSelection == "Paper" && playerSelection == "Scissors") {
    console.log("Player Wins");
  } else {
    console.log("Computer Wins");
  }
}