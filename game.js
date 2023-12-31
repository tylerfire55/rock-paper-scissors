let playerScore = 0;
let cpuScore = 0;
let playerChoice = "scissors";
const gameMessage = document.querySelector(".gameMessage");
const playAgain = document.querySelector(".playAgainButton");
const button = document.querySelectorAll("button");

button.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.textContent != "Play again?") {
            playerChoice = event.target.textContent;
            game();
            if(cpuScore == 3 || playerScore == 3){
                gameOver();
            }
        }
    })  
})
playAgain.addEventListener("click", restartGame)

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
        gameMessage.style.color = "orange";
        return `You lose! ${capitalizeFirst(cpuChoice)} beats ${playerChoice}!` 
    }
    else if (
        (playerChoice == "rock" && cpuChoice == "rock") || 
    (playerChoice == "paper" && cpuChoice == "paper") || 
    (playerChoice == "scissors" && cpuChoice == "scissors")
    ) {
        gameMessage.style.color = "yellow";
        return `It's a tie!`
    }
    else {
        playerScore ++;
        gameMessage.style.color = "skyblue";
        return `You win! ${capitalizeFirst(playerChoice)} beats ${cpuChoice}!` 
    }
}

function capitalizeFirst(string){
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase()
}

function game(){
    const cpuChoice = getComputerChoice();
    gameMessage.textContent = (rockPaperScissors(playerChoice, cpuChoice));
    if (playerScore == 3){
        gameMessage.textContent = ("Game over! Player wins!");
        playAgain.style.backgroundColor = "skyblue";
    }
    else if (cpuScore == 3){
        gameMessage.textContent = ("Game over! CPU wins!")
        playAgain.style.backgroundColor = "orange";
    }
    updateScore();
}

function gameOver(){
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

function restartGame(){
    playerScore = 0;
    cpuScore = 0;
    playAgain.style.visibility = "hidden";
    updateScore();
    enableButtons();
    gameMessage.textContent = "";
}