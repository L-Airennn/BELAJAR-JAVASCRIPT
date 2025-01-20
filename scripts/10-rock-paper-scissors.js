let score= JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  loses :0,
  Ties : 0
};
updateScoreElemet();

/*
if (!score){
  score= {
    wins : 0,
    loses :0,
    Ties : 0
  };
}
*/

function playGames(playerMove){
  const computerMove = pickComputerMove();

  let result ='';  

  if (playerMove === 'Rock'){
    if (computerMove === 'rock') {
      result ='Tie.';
    } else if(computerMove === 'paper'){
      result ='You Lose.';
    } else if (computerMove === 'scissors') {result = 'You Win.';}

  } else if(playerMove === 'Paper'){
    if (computerMove === 'rock') {
    result ='You Win.';
    } else if(computerMove === 'paper'){
      result ='Tie.';
    } else if (computerMove === 'scissors') {result = 'You Lose.';}
    
  } else if(playerMove === 'Scissors'){
    if (computerMove === 'rock') {
    result ='You Lose.';
    } else if(computerMove === 'paper'){
    result ='You Win.';
    } else if (computerMove === 'scissors') {result = 'Tie.';
    }
  }

  if(result === 'You Win.') {
    score.wins += 1;
  } else if(result === 'You Lose.'){
    score.loses +=1;
  } else if (result === 'Tie.'){
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElemet();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="../images/${playerMove}-emoji.png" class="move-icon">
<img src="../images/${computerMove}-emoji.png"class="move-icon">
Computer`;

}


function updateScoreElemet(){
  document.querySelector('.js-score')
  .innerHTML = `wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.Ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 &&randomNumber < 1 / 3) {
    computerMove ='rock';

  } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    computerMove ='paper';

  } else if(randomNumber >= 2 /3  && randomNumber < 1){
    computerMove ='scissors'
  }

  return computerMove;

  /*
  # Return statement lets us get a  value out of a function
  # When we use a return statement, it ends the function immediately.
  */
}