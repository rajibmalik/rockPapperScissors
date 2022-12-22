console.log("hello world")

// game against computer
// start with function getComputerChoice
// randomly returns either "Rock", "Paper", or "Scissors"

const options = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
  return options[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());