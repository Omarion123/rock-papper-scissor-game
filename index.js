const playerText=document.querySelector("#playerText");
const computerText=document.querySelector("#computerText");
const resultText=document.querySelector("#resultText");
const choiceBtns=document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
choiceBtns.forEach(button => button.addEventListener("click", () => {
  player=button.textContent;
  computerTurn();
  playerText.textContent=`Player: ${player}`;
  computerText.textContent=`Computer: ${computer}`;
  resultText.textContent=checkWinner();
}));

function computerTurn(){
  const randNum = Math.floor(Math.random() *3) + 1;
  switch(randNum){
    case 1:
      computer="ROCK";
      break;
    case 2:
      computer="PAPER";
      break;
    case 3:
      computer="SCISSOR";
      break;
  }
}
function checkWinner(){
  if(player==computer){
    return "draw!";
  }
  else if(computer == "ROCK"){
    return(player == "PAPER")? "you win!":"you lose!";
  }
  else if(computer == "PAPER"){
    return(player == "SCISSOR")? "you win!":"you lose!";
  }
  else if(computer == "SCISSOR"){
    return(player == "ROCK")? "you win!":"you lose!";
  }
}