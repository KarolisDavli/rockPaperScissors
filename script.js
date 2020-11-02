// Global variables
let computerSelection;
let playerSelection;
let playerCounter = 0;
let computerCounter = 0;

// DOM selectors
const title = document.querySelector('h1');
const playerScore = document.querySelector('.player').firstElementChild;
const computerScore = document.querySelector('.computer').firstElementChild;


// Player picks an option
// function playerPlay() {
//   let playerInput = prompt("Enter you selection: 'rock - paper - scissors' ");
//   // Format players input
//   let playerChoice =
//     playerInput.charAt(0).toUpperCase() +
//     playerInput.substring(1, playerInput.length).toLowerCase();
//   return playerChoice;
// }


// New Shit
const buttons = document.querySelectorAll('.player-selection');
buttons.forEach((button) => {
  button.addEventListener('click', doSomething);
})

// Buttons animations
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
  })
})

buttons.forEach((button) => {
  button.addEventListener('transitionend', removeTransition);
  console.log(button);
})

// Remove animation
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //Skip if not transform
  this.classList.remove('clicked')
  console.log(e.propertyName);
}


function doSomething() {
  let playerSelection = this.innerHTML;
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);

  if (playerCounter === 5) {
    title.textContent = 'Player Wins'
    playerCounter = 0;
    computerCounter = 0;
    playerScore.textContent = playerCounter;
    computerScore.textContent = playerCounter;
    return;
  } else if (computerCounter === 5) {
    title.textContent = 'Computer Wins';
    playerCounter = 0;
    computerCounter = 0;
    playerScore.textContent = playerCounter;
    computerScore.textContent = playerCounter;
    return;
  }
}
// New Shit End

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
    title.textContent = 'It\'s a tie!'
    // Check if player wins
  } else if (
    (computerSelection == "Rock" && playerSelection == "Paper") ||
    (computerSelection == "Scissors" && playerSelection == "Rock") ||
    (computerSelection == "Paper" && playerSelection == "Scissors")
  ) {
    playerCounter++;
    playerScore.textContent = playerCounter;
    title.textContent = (`${playerSelection} beats ${computerSelection}, Player Wins!`);
    // Check if computer wins
  } else {
    computerCounter++;
    computerScore.textContent = computerCounter;
    title.textContent = (`${computerSelection} beats ${playerSelection}, Computer Wins!`);
  }
}

// function game() {
//   // Looping game 5 times
//   for (i = 0; i < 5; i++) {
//     // Init selection for computer and player
//     computerSelection = computerPlay();
//     playerSelection = playerPlay();

//     // Runing game play function and logging results
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }


