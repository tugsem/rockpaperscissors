
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const options = document.getElementsByClassName("options");
const score = document.getElementById("score");
const moves= document.getElementById("moves");

rock.value= "rock";
paper.value= "paper";
scissors.value= "scissors";


//computer selection
function computerPlay(){
    const options = ["rock", "paper", "scissors"];
        let choice =Math.floor(Math.random()*3);   
        return options[choice];
}

 rock.addEventListener("click", playRound);
 paper.addEventListener("click", playRound);
 scissors.addEventListener("click", playRound);

//single round. return string declared who has won.
function playRound(e){
    let playerSelection = e.target.value;
    let computerSelection = computerPlay();
    let result = "";
        if(playerSelection == computerSelection) {
            result = "It's a drawn";
            moves.innerText = `You choose ${playerSelection}, computer choose ${computerSelection}. ${result}. `;
            return result;
        } 
        switch(playerSelection) {
            case "rock": 
            result =  (computerSelection == "paper") ? "You lose" :  "You win";
            break;
            case "paper": 
            result = (computerSelection == "rock") ?  "You win" :  "You lose";
            break;
            case "scissors":
            result = (computerSelection == "paper") ?  "You win" :  "You lose" ;
            break;
        }
    
        moves.innerText = `You choose ${playerSelection}, computer choose ${computerSelection}. ${result}. `;
        game(result);
        return result;
}

// keeps score and return score table of one round.
const scoreTable = (result) => {
    let userScore = 0;
    let compScore = 0;
    return (result) => {
        if (result == "You win") {
             ++userScore;
        } else if (result == "You lose") {
             ++compScore;
        }
         score.innerText = `${userScore} - ${compScore}`;
         if(userScore + compScore == 5){ 
            if(userScore > 2) {
               text="You have won the game. Congrats!";
            } else {
               text="Computer has won the game. Try again :(";
            }
            final.innerText = `${text}`;
            userScore =0;
            compScore= 0;
            score.innerText =`${userScore} - ${compScore}`;
         };
    }
}
const game = scoreTable();

 