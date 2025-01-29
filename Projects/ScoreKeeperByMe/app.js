const firstPlayerButton = document.querySelector("#firstPlayerButton")
const secondPlayerButton = document.querySelector("#secondPlayerButton")
const reset = document.querySelector("#reset")

const rounds = document.querySelector('#rounds')
const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoScore = document.querySelector('#playerTwoScore');


let winningScore = 5;
let p1Score = 0;
let p2Score = 0;

firstPlayerButton.addEventListener("click", function(){
  if(p1Score!== winningScore && p2Score!== winningScore ){
    p1Score +=1;
    playerOneScore.innerText = p1Score;
  }
  if(p1Score === winningScore){
    playerOneScore.style.color = "green";
    playerTwoScore.style.color = "red";
  }
});

secondPlayerButton.addEventListener('click', function(){
  if(p2Score!== winningScore && p1Score!== winningScore){
  p2Score +=1;
  playerTwoScore.innerText = p2Score;
  // playerTwoScore.innerText = `${parseInt(playerTwoScore.innerText) + 1}`;
  }
  if(p2Score === winningScore){
    playerOneScore.style.color = "red";
    playerTwoScore.style.color = "green";
  }
});

rounds.addEventListener('change',function(){
  winningScore = parseInt(this.value);
  p1Score = 0;
  playerOneScore.innerText = p1Score;
  p2Score = 0;
  playerTwoScore.innerText = p2Score;
  playerOneScore.style.color = "black";
  playerTwoScore.style.color = "black";

});

reset.addEventListener('click', function(){

  winningScore = 5;
  p1Score = 0;
  playerOneScore.innerText = p1Score;
  p2Score = 0;
  playerTwoScore.innerText = p2Score;

  playerOneScore.style.color = "black";
  playerTwoScore.style.color = "black";
});