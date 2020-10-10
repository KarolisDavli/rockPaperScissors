// Global variables
let computerSelection;
let playerSelection;

// Player picks an option
function playerPlay() {
  let playerInput = prompt("Enter you selection: 'rock - paper - scissors' ");
  // Format players input
  let playerChoice =
    playerInput.charAt(0).toUpperCase() +
    playerInput.substring(1, playerInput.length).toLowerCase();
  return playerChoice;
}

// Computer randomly picks an option
function computerPlay() {
  let game = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  let computerChoice = game[i];
  return computerChoice;
}

// Game play
function playRound(playerSelection, computerSelection) {
  // Start with checking if its a tie
  if (computerSelection === playerSelection) {
    return "Tie";
    // Check if player wins
  } else if (
    (computerSelection == "Rock" && playerSelection == "Paper") ||
    (computerSelection == "Scissors" && playerSelection == "Rock") ||
    (computerSelection == "Paper" && playerSelection == "Scissors")
  ) {
    console.log(`${playerSelection} beats ${computerSelection}, Player Wins!`);
    return "You Win!";
    // Check if computer wins
  } else {
    console.log(
      `${computerSelection} beats ${playerSelection}, Computer Wins!`
    );
    return "You Lose!";
  }
}

function game() {
  // Looping game 5 times
  for (i = 0; i < 5; i++) {
    // Init selection for computer and player
    computerSelection = computerPlay();
    playerSelection = playerPlay();

    // Runing game play function and logging results
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
