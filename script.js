const gameRounds = 5;

function playGame() {
    for (let i = 0; i < gameRounds; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors:").toLowerCase();
        let computerSelection = getComputerChoice().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function getComputerChoice() {
    const choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {return `It's a tie!`;}
    const combinedStrings = playerSelection + computerSelection;
    switch (combinedStrings) {
        case "scissorspaper":
        case "paperrock":
        case "rockscissors":
            return `You win! ${playerSelection} wins ${computerSelection}`;
        default:
            return `You lose! ${computerSelection} wins ${playerSelection}`;
    }
}

playGame();