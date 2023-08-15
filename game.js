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
    document.querySelector(".gameMessage").textContent = (rockPaperScissors(playerChoice, cpuChoice));
    if (playerScore == 3){
        document.querySelector(".gameMessage").textContent = ("Game over! Player wins!");
    }
    else if (cpuScore == 3){
        document.querySelector(".gameMessage").textContent = ("Game over! CPU wins!")
    }
    updateScore();
}


const button = document.querySelectorAll("button");

button.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.textContent == "Play again?") return;
        playerChoice = event.target.textContent;
        game();
        if(cpuScore == 3 || playerScore == 3){
            disableButtons();
        };
    })  
})

function disableButtons(){
    button.forEach(button => {
        button.disabled = true;
    })
    playAgain.style.visibility = "visible";
    playAgain.disabled = false;
}
function enableButtons(){
    button.forEach(button => {
        button.disabled = false;
    })
}


function updateScore(){
    document.querySelector(".playerScore").textContent = `Player: ${playerScore}`;
    document.querySelector(".cpuScore").textContent = `CPU: ${cpuScore}`;
}

const playAgain = document.querySelector(".playAgain");
playAgain.addEventListener("click", restartGame)

function restartGame(){
    playerScore = 0;
    cpuScore = 0;
    playAgain.style.visibility = "hidden";
    updateScore();
    enableButtons();
}
