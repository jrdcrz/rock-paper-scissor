let playerScore = 0;
let computerScore = 0;


function game(){
    for( i =0; i < 5; i++){
        let choice = (["Rock", "Paper", "Scissor"]);
const playerPlay = prompt("Enter your Choice: "+choice);
const computerPlay = Math.floor(Math.random() * 3);

if(computerPlay == 0) {
    choice = "Rock";
}else if (computerPlay == 1){
    choice = "Paper";
}else if(computerPlay == 2){
    choice = "Scissor"
}



function playRound (playerPlay, choice){
    if(playerPlay == "Rock" && choice == "Scissor"){
        playerScore++;
        return "Player wins";
    }else if(playerPlay == "Rock" && choice == "Paper"){
            computerScore++;
            return "Computer Wins";
    }else if(playerPlay == "Rock" && choice == "Rock"){
            return "Draw";
    }
    if(playerPlay == "Paper" && choice == "Rock"){
            playerScore++;
            return "Player wins";
    }else if(playerPlay == "Paper" && choice == "Scissor"){
        computerScore++;    
        return "Computer Wins";
    }else if(playerPlay == "Paper" && choice == "Paper"){
        return "Draw";
    }
    if(playerPlay == "Scissor" && choice == "Paper"){
        playerScore++;
        return "Player wins";
    }else if(playerPlay == "Scissor" && choice == "Rock"){
        computerScore++;
        return "Computer Wins";
    }else if(playerPlay == "Scissor" && choice == "Scissor"){
        return "Draw";
}
}
console.log("Player's Choice: "+ playerPlay);
        console.log("computer's Choice: "+ choice);
        console.log(playRound(playerPlay, choice));
        console.log("Player's Score: "+ playerScore);
        console.log("computer's Score: "+ computerScore);
        
    }
}

game();
