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

function capitalizeInput(input) {
    return ((input.substr(0,1)).toUpperCase()) + ((input.substr(1)).toLowerCase());
  }

function getPlayerChoice() {
    input = prompt("Rock, paper, or scissors?");
    let playerChoice = capitalizeInput(input);

    if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
        return playerChoice;
    }
    else {
        alert("Invalid input.")
    }

}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        alert("It's a tie! Try again.");
    }
    else if ((computerChoice === "Rock" && playerChoice === "Scissors") ||
        (computerChoice === "Scissors" && playerChoice === "Paper") ||
        (computerChoice === "Paper" && playerChoice === "Rock")) {
        alert(`You lose! ${computerChoice} beats ${playerChoice}.`)
    }
    else {
        alert(`You win! ${playerChoice} beats ${computerChoice}.`)
    }
}


// function playRound(computerChoice, playerChoice) {
//     if (computerChoice === playerChoice) {
//         alert ("It's a tie! Try again.");
//     }
//     else if (computerChoice === "Rock" && playerChoice === "scissors") {
//         alert ("You lose! Rock beats scissors."
//         )
//     }

// }
