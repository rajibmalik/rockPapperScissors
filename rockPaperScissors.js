const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return options[Math.floor(Math.random() * 3)];
}

const getPlayerChoice = () => {
  return prompt("Rock, paper or scissors")
}

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock"
    ){
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else if (
    computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "scissors" && playerSelection == "paper" || 
    computerSelection == "paper" && playerSelection == "rock"
  ){ 
    computerScore += 1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `Draw! ${playerSelection} and ${computerSelection} means that there is no winner!`;
  }
}



const declareWinner = () => {
  if (playerScore > computerScore) {
    return "Congratulations, you win"
  } else {
    return "You lose!"
  }
}

let playerScore = 0;
let computerScore = 0;

const game = () => {
  for(let i = 0; i < 5; i++) {
    console.log("player score:");
    console.log(playerScore);
    console.log("computer score:");
    console.log(computerScore);

    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log("player selection");
    console.log(playerSelection);
    console.log("computer selection");
    console.log(computerSelection);

    playRound(playerSelection, computerSelection);
  } 

  return declareWinner();
}

console.log(game());





