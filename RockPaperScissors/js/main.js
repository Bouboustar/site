var userScore = 0;
var computerScore = 0;
const userScore_sp = document.getElementById("user-score");
const compScore_sp = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const pierre_div = document.getElementById("rock");
const papier_div = document.getElementById("paper");
const ciseau_div = document.getElementById("scissors");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

function convertLetter(letter){
    if (letter === "r") return "Pierre";
    if (letter === "p") return "Papier";
    return "Ciseaux";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_sp.innerHTML = userScore;
    compScore_sp.innerHTML = computerScore;
    result_p.innerHTML = `${convertLetter(userChoice)}` + " gagne contre " + `${convertLetter(computerChoice)}`
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_sp.innerHTML = userScore;
    compScore_sp.innerHTML = computerScore;
    result_p.innerHTML = `${convertLetter(userChoice)}` + " perd contre " + `${convertLetter(computerChoice)}`
}
function draw(userChoice, computerChoice) { 
    userScore_sp.innerHTML = userScore;
    compScore_sp.innerHTML = computerScore;
    result_p.innerHTML = `${convertLetter(userChoice)}`+ " est égalité avec " + `${convertLetter(computerChoice)}`
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    pierre_div.addEventListener("click", function() {
        game("r");
    })
    papier_div.addEventListener("click", function() {
        game("p");
    })
    ciseau_div.addEventListener("click", function() {
        game("s");
    })
}
main();