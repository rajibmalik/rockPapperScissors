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

const game = () => {
  computerSelection = "rock"
  playerSelection = "paper"
  console.log(playRound());
}

console.log(game());
