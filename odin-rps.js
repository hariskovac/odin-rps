let pScore = 0;
let cScore = 0;
let winner = false;

const buttons = document.querySelectorAll(".choiceButton");

buttons.forEach(button => button.addEventListener("click", function(e) {
  game(playRound(e.target.innerText, computerPlay()));
}));

function computerPlay() {
  let opponentChoice = Math.floor(Math.random() * 3);
  if (opponentChoice === 1) {
    return "rock";
  } else if (opponentChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
    return "You win!";
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
    return "You win!";
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
    return "You win!";
  } else if (playerSelection.toLowerCase() === computerSelection) {
    return "Tie game!";
  } else {
    return "You lose!"
  }
}

function game(result) {
  const resultDiv = document.querySelector("#result");
    
  if (result === "You win!" && winner === false) {
    pScore++;
    resultDiv.textContent = "You win the game! The score is " + pScore + " - " + cScore;
  } else if (result === "You lose!" && winner === false) {
    cScore++;
    resultDiv.textContent = "Computer wins the game! The score is " + pScore + " - " + cScore;
  } else if (winner === false) {
    resultDiv.textContent = "Tie game! The score is " + pScore + " - " + cScore;
  }


  if (pScore >= 5) {
    resultDiv.textContent = "You win the series!";  
    winner = true;
  } else if (cScore >= 5) {
    resultDiv.textContent = "The computer wins the series!";
    winner = true;
  }
}