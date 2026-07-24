 let score = JSON.parse(localStorage.getItem('score'));
            if(score===null){
              score = {
                wins: 0,
                losses: 0,
                ties: 0
              };
            }
         
             updateScoreElement();

            function playGame(playerMove){
              const computerMove=pickComputermove();               
              let result ='';
              if (playerMove === 'Scissors'){
                if (computerMove ==='rock'){
                  result = 'YOU LOSE';                
                }else if (computerMove === 'scissors'){
                  result = 'tie';
                
                }else if (computerMove ==='paper'){
                  result = 'YOU WIN';
                }

            }else if (playerMove==='Paper'){
              if (computerMove ==='rock'){
                result = 'YOU WIN';

              
              }else if (computerMove === 'scissors'){
                result = 'YOU LOSE';
              
              }else if (computerMove ==='paper'){
                result = 'tie';
              }

              
            }else if (playerMove==='Rock'){
               if (computerMove ==='rock'){
                result = 'tie';

              
              }else if (computerMove === 'scissors'){
                result = 'YOU WIN';
              
              }else if (computerMove ==='paper'){
                result = 'YOU LOSE';
              }

            }
            if (result === 'YOU WIN'){
              score.wins +=1;

            }else if (result === 'YOU LOSE'){
              score.losses +=1;
            }
            else if (result ==='tie'){
              score.ties +=1;
            }
            
            
            localStorage.setItem('score',JSON.stringify(score));
            updateScoreElement();

            document.querySelector('.js-result').innerHTML =result;
            document.querySelector('.js-moves').innerHTML = 
            ` You
              <img src="images/${playerMove}-emoji.png" class="move-icon">
              <img src="images/${computerMove}-emoji.png" class="move-icon">
              Computer `
        
          }
            
            function updateScoreElement(){
              document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }  
              function pickComputermove() {
              const randomNumber= Math.random();
              let computerMove= '';
              
              if (randomNumber >=0 && randomNumber < 1/3 ){
                computerMove = 'rock' ;
              }else if (randomNumber >=1/3 && randomNumber < 2/3){
                computerMove = 'paper' ;

              }else if (randomNumber >=2/3 && randomNumber < 1){
                computerMove = 'scissors' ;

            }
            return computerMove;
           
          }
        