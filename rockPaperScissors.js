// console.log("hello world")

// game against computer
// start with function getComputerChoice
// randomly returns either "Rock", "Paper", or "Scissors"

const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return options[Math.floor(Math.random() * 3)];
}

// console.log(getComputerChoice());

// function that plays a round of rock paper scissors
// two parameters
// playerSelection 
// computerSelection 

// return a string that declares the winner of the round 
// e.g "You Lose! Paper beats Rock"

// Make playerSelection case-insensitive, user can input rock, ROCK, RocK 

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock"
    ){
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else if (
    computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "scissors" && playerSelection == "paper" || 
    computerSelection == "paper" && playerSelection == "rock"
  ){ 
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `Draw! ${playerSelection} and ${computerSelection} means that there is no winner!`;
  }
}

const playerSelection = "rock";
const computerSelection = "rock"

console.log(playRound(playerSelection, computerSelection));



