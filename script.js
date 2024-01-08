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
    const result = document.createElement('p');
    if (computerChoice === playerChoice) {
        result.textContent = "It's a tie! Try again.";
        container.appendChild(result);
    }
    else if ((computerChoice === "Rock" && playerChoice === "Scissors") ||
        (computerChoice === "Scissors" && playerChoice === "Paper") ||
        (computerChoice === "Paper" && playerChoice === "Rock")) {
        result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        container.appendChild(result);
        return "computer";
    }
    else {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        container.appendChild(result);
        return "player";
    }
}

function game() {
    let winner = playRound(getComputerChoice(), getPlayerChoice())
    if (winner === "player") {
        playerWin++;
    }
    else if (winner === "computer") {
        computerWin++;
    }
    else {
        console.log("it's a tie.");
    }
}

let playerWin = 0;
let computerWin = 0;

// let keepGoing = true;

// while (keepGoing) {
//     game();
//     if (playerWin >= 3) {
//         alert("Congratulations! You win.");
//         keepGoing = false;
//     }

//     if (computerWin >= 3) {
//         alert("Too bad! You lost.");
//         keepGoing = false;
//     }
// }

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