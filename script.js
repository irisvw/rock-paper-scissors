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
    winner.textContent = "";
    tryAgain.setAttribute('style', 'display: none');
    if (computerChoice === playerChoice) {
        container.textContent = "It's a tie! Try again.";
    }
    else if ((computerChoice === "Rock" && playerChoice === "Scissors") ||
        (computerChoice === "Scissors" && playerChoice === "Paper") ||
        (computerChoice === "Paper" && playerChoice === "Rock")) {
        container.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerWin++;
        score.textContent = `${playerWin} - ${computerWin}`;
        announceWinner();
    }
    else {
        container.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerWin++;
        score.textContent = `${playerWin} - ${computerWin}`;
        announceWinner();
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

function announceWinner() {
    if (playerWin >= 5 || computerWin >= 5) {
        if (playerWin > computerWin) {
            winner.textContent = "Congratulations! You win.";
            tryAgain.setAttribute('style', 'display: block');
        } else {
            winner.textContent = "Too bad! You lost.";
            tryAgain.setAttribute('style', 'display: block');
        }

        playerWin = 0;
        computerWin = 0;
        score.textContent = `${playerWin} - ${computerWin}`;
    }
}