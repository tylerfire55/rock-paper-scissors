let playerScore = 0;
let cpuScore = 0;
let playerChoice = "scissors";

function getComputerChoice() {
    let cpuNum = Math.floor(Math.random() * 3);
    if (cpuNum < 1) {
        return "rock";
    }
    else if (cpuNum < 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function rockPaperScissors(playerChoice, cpuChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (
        (playerChoice == "rock" && cpuChoice == "paper") || 
    (playerChoice == "paper" && cpuChoice == "scissors") || 
    (playerChoice == "scissors" && cpuChoice == "rock")
    ) {
        cpuScore ++;
        return `You lose! ${capitalizeFirst(cpuChoice)} beats ${playerChoice}!` 
    }
    else if (
        (playerChoice == "rock" && cpuChoice == "rock") || 
    (playerChoice == "paper" && cpuChoice == "paper") || 
    (playerChoice == "scissors" && cpuChoice == "scissors")
    ) {
        return `It's a tie!`
    }
    else {
        playerScore ++;
        return `You win! ${capitalizeFirst(playerChoice)} beats ${cpuChoice}!` 
    }
}

function capitalizeFirst(string){
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase()
}

function game(){
    const cpuChoice = getComputerChoice();
    console.log(rockPaperScissors(playerChoice, cpuChoice));
    console.log(`Player ${playerScore} - ${cpuScore} CPU`);
    if (playerScore == 3){
        console.log("Game over! Player wins!")
        playerScore = 0;
        cpuScore = 0;
    }
    else if (cpuScore == 3){
        console.log("Game over! CPU wins!")
        playerScore = 0;
        cpuScore = 0;
    }
    updateScore();
}


const button = document.querySelectorAll("button");
button.forEach(button => {
    button.addEventListener("click", event => {
        playerChoice = event.target.textContent;
        game();
    })
})



function updateScore(){
    document.querySelector(".playerScore").textContent = playerScore;
    document.querySelector(".cpuScore").textContent = cpuScore;
}