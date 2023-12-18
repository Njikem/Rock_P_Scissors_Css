// Update the scores by creating an object for the result
      //This (let score) is the same code as JSON.parse code. Is just that the let score has been stored in a local storage and it can be use anywhere. The JSON.parse will not allow the score to reset to zero when you done playing. This will allow you to continue with the score you left the last time.
     
     
      
      
      //the JSON.parse will convert the JSON.stringify back to an object. To see the score in the localstorage do console.log on the let score

      //Another way of adding the null with the JSON.parse.(|| this null symbol)

      let score = (JSON.parse(localStorage.getItem('score'))) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };
    


     //We want to print the score on the web page not on a popup.
     /*
     document.querySelector('.js-score').    innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;    
     */ 
        //We comment out the one above because we give the updated score a function called updateScoreElement

        //call the function 

        updateScoreElement();
        




      //Creating the results

        function playGame(playerMove){

        let computerMove = pickComputerMove();

       let  result = '';

       if (playerMove === 'scissors'){

        if(computerMove === 'rock'){
            result ='You lose';
        }else if (computerMove === 'paper'){
            result  = 'You Win';
        }else if(computerMove === 'scissors'){
            result = 'Tie';
        }

        
        } else if (playerMove === 'paper'){
          
            if (computerMove === 'rock'){
                result ='You Win';
            }else if (computerMove === 'paper'){
                result  = 'Tie';
            }else if (computerMove === 'scissors'){
                result = 'You lose';
            }
            

        } else if (playerMove === 'rock'){
            if(computerMove === 'rock'){
                result ='Ties';
            }else if (computerMove === 'paper'){
                result  = 'You lose';
            }else if(computerMove === 'scissors'){
                result = 'You Win';
            }

        }




    //Updating  the scores for the result
      if(result === 'You Win'){
        score.wins += 1;

      }else if( result === 'You lose'){
        score.losses += 1;

      }else if(result === 'Tie'){
        score.ties += 1;

      }


      //We want the score to be updated on the page immediately you click any of the options.

     //call the function of the updated score

     updateScoreElement();

     //This will show the result and the moves on the page
        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You 
    <img src="/images/rock_image.jpg">
    <img src="/images/scissors_image.jpg">
         computer`;

      //Store the update into a localstorage using JSON.stringify. This will save the score permanently.


      localStorage.setItem('score', JSON.stringify(score));

     //displaying the scores and popup by adding updated scores into the alert.
        /*
       //Since we have the moves and result on the page we have to  remove the alert
    
        alert(`You picked ${playerMove}. Computer picked ${computerMove}. 
        ${result}Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);                      
        */
     }


//Update the score on the page immediately you click any of the options.
//This will update the score on the page

function updateScoreElement(){

    document.querySelector('.js-score').    innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;     

}




        
//Creating the random move
     function pickComputerMove(){

        let computerMove = '';

        let randomNumber = Math.random();


        if (randomNumber >= 0 && randomNumber < 1/3){
            computerMove = 'rock';

        }else if (randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove = 'paper';
        }else if (randomNumber  >=2/3 && randomNumber < 1)
        computerMove = 'scissors';

       console.log(computerMove)

        

        return computerMove;

     }

