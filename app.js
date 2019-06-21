const main = ()=> {
    var pscore = 0, cscore = 0;
    
    const startGame = ()=>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const game = document.querySelector(".game");
        
        playButton.addEventListener("click", ()=>{
            introScreen.classList.add("fadeout");
            game.classList.add("fadein");
        });
    };
    
    const playMatch = ()=> {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const computerOptions = ["rock", "paper", "scissors"];
        const hands = document.querySelectorAll(".hands img");
        hands.forEach((hand)=>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });
        
        options.forEach((option)=>{
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(()=>{
                    playerHand.src =  `./images/${this.textContent}.png`;
                    computerHand.src =  `./images/${computerChoice}.png`;
                    compareHands(this.textContent, computerChoice);
                }, 2000);
                playerHand.src = `./images/rock.png`;
                computerHand.src = `./images/rock.png`;
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                
                
            });      
        });   
    };
    
    const updateScore = ()=> {
        const winner = document.querySelector(".winner");
        const playerScore = document.querySelector(".Player-score p");
        const computerScore = document.querySelector(".Computer-score p");
        playerScore.textContent = pscore;
        computerScore.textContent = cscore;
        if(pscore == 5){
            winner.textContent = "CONGRATS YOU WON THE GAME";
            return;
        }
        if(cscore == 5){
            winner.textContent = "SORRY YOU LOST THE GAME";
            return;
        }
    }
    
    const check = ()=> {
        if(pscore == 5 || cscore == 5)
            pscore = 0, cscore = 0;
    }
    
    const compareHands = (playerChoice, computerChoice)=> {
        const winner = document.querySelector(".winner");
        const playerScore = document.querySelector(".Player-score p");
        const computerScore = document.querySelector(".Computer-score p");
        if(playerChoice === computerChoice){
            winner.textContent = "It's a tie";
            check();
            return;
        }
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Yay!! You Won";
                check();
                pscore++;
                updateScore();
            }
            else{
                winner.textContent = "Sorry!! You Lost"
                check();
                cscore++;
                updateScore();
            }
            return;
        }
        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                winner.textContent = "Yay!! You Won";
                check();
                pscore++;
                updateScore();
            }
            else{
                winner.textContent = "Sorry!! You Lost"
                check();
                cscore++;
                updateScore();
            }
            return;
        }
        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "Yay!! You Won";
                check();
                pscore++;
                updateScore();
            }
            else{
                winner.textContent = "Sorry!! You Lost"
                check();
                cscore++;
                updateScore();
            }
            return;
        } 
    };
    startGame();
    playMatch();
};
main();