/* Define function getComputerChoice.
Return Rock, Paper or Scissors.

Ask player to select either rock, paper or scissors.
Compare against computer choice. 
Declare the winner.

If tie, replay the round.

Function that keeps score.
Loop. End loop if either player or computer scores more than three.*/

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        container.textContent = "It's a tie! Try again.";
    }
    else if ((computerChoice === "Rock" && playerChoice === "Scissors") ||
        (computerChoice === "Scissors" && playerChoice === "Paper") ||
        (computerChoice === "Paper" && playerChoice === "Rock")) {
        container.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerWin++;
        score.textContent = `Player: ${playerWin}
        Computer: ${computerWin}`;
    }
    else {
        container.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerWin++;
        score.textContent = `Player: ${playerWin}
        Computer: ${computerWin}`;
    }
}

let playerWin = 0;
let computerWin = 0;

let rockButton = document.querySelector('#rockButton');
let paperButton = document.querySelector('#paperButton');
let scissorsButton = document.querySelector('#scissorsButton');

rockButton.addEventListener('click', () => {
    playRound(getComputerChoice(), "Rock");
})

paperButton.addEventListener('click', () => {
    playRound(getComputerChoice(), "Paper");
})

scissorsButton.addEventListener('click', () => {
    playRound(getComputerChoice(), "Scissors");
})