const playButton = document.querySelector("button");

playButton.addEventListener("click", game);

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

function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("What do you choose, rock, paper, or scissors?", "");
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    if (result === "You win!") {
      score++;
      console.log("Player win!");
    } else if (result === "You lose!") {
      score--;
      console.log("Computer win!")
    } else {
      console.log("Tie game!");
    }
  }
  
  if (score > 0) {
    console.log("You win the best of 5!");  
  } else if (score < 0) {
    console.log("The computer wins the best of 5!");
  } else {
    console.log("Tie series!");
  }
}