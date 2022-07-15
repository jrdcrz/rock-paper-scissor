const GameName = document.querySelector('#GameName');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Rock Paper Scissor!';

const game = () => {
let playerScore = 0;
let computerScore = 0;
let countMoves = 0;


        const playGame =() => {
            const rockBtn = document.querySelector('.rock');
            const paperBtn = document.querySelector('.paper');
            const scissorBtn = document.querySelector('.scissor');
            const playerPlay = [rockBtn, paperBtn, scissorBtn];
            const computerPlay = ['rock', 'paper', 'scissor']

        playerPlay.forEach(option => {
            option.addEventListener('click' ,function() {

                const movesLeft = document.querySelector('.movesleft');
                countMoves++;
                movesLeft.innerText = `Moves Left: ${5-countMoves}`;

                const compChoice = Math.floor(Math.random() * 3);
                const compuChoice = computerPlay [compChoice];

                win(this.innerText,compuChoice)

                if(countMoves == 5){
                    gameOver(playerPlay, movesLeft);
                }
            })
        })
    }

            const win = (Player, Computer) => {
                Player = Player.toLowerCase();
                Computer = Computer.toLowerCase();
                const result = document.querySelector('.result');
                const playerScoreSec = document.querySelector('.play-count');
                const computerScoreSec = document.querySelector('.comp-count');


                if(Player === Computer){
                    result.textContent = 'tie'
                }
                else if(Player == 'paper'){
                    if(Computer =='rock'){
                        result.textContent = 'Player won!'
                        playerScore++;
                        playerScoreSec.textContent = playerScore;
                    }else{
                        result.textContent = 'Computer won!'
                        computerScore++;
                        computerScoreSec.textContent = computerScore;
                    }
                }else if(Player == 'rock'){
                    if(Computer == 'scissor'){
                        result.textContent ='Player won!'
                        playerScore++;
                        playerScoreSec.textContent = playerScore;
                    }else{
                        result.textContent = 'Computer wom!'
                        computerScore++;
                        computerScoreSec.textContent = computerScore;
                    }
                }else if(Player == 'scissor'){
                    if(Computer == 'paper'){
                        result.textContent = 'Player won!'
                        playerScore++;
                        playerScoreSec.textContent = playerScore;
                    }else{
                        result.textContent = 'Computer won!'
                        computerScore++;
                        computerScoreSec.textContent = computerScore;
                    }
                }
            }

            const gameOver = (playerPlay, movesLeft) =>{
                const choose = document.querySelector('.move');
                const result = document.querySelector('.result');
                const retryBtn = document.querySelector('.retry');

                playerPlay.forEach(option => {
                    option.style.display ='none';
                })

                choose.innerText = 'Game Over!'
                movesLeft.style.display = 'none';

                if(playerScore > computerScore){
                    result.innerText = 'You won the game!'
                    result.style.color = 'green'
                    result.style.fontSize = '2rem';
                }
                else if(playerScore < computerScore){
                    result.innerText = 'You loss the game!'
                    result.style.color = 'red'
                    result.style.fontSize = '2rem'; 
                }else{
                    result.innerText = 'Tie!'
                    result.style.color = 'grey'
                    result.style.fontSize = '2rem';
                }

                retryBtn.innerText = 'Retry';
                retryBtn.style.display = 'flex'
                retryBtn.addEventListener('click',() =>{
                    window.location.reload();
                })
            }
    
    playGame();
}
game();