let humanScore = 0;

let computerScore = 0;

let currentRoundNumber = 1;

  

// Write your code below:

  

function generateTarget() {

 return Math.floor(Math.random() * 10);

}

  

function compareGuesses(user, computer, secretNumber){

 var absoluteUser = Math.abs(secretNumber - user);

 var absoluteComputer = Math.abs(secretNumber - computer);

 return absoluteUser <= absoluteComputer;

}

  

function updateScore(winner){

 if(winner == 'human'){

 humanScore ++;

 }else{

 computerScore ++;

 }

}

  

function advanceRound(){

 currentRoundNumber++;

}