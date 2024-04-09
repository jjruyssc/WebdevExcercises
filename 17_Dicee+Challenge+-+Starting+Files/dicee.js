function throwDice() {
    var diceNumber = Math.floor(((Math.random())*6) + 1);
    return diceNumber;
}

function showDices(diceP1, diceP2){
document.querySelector(".img1").setAttribute("src", "images/dice"+diceP1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+diceP2+".png");
} 

function getWinnerMessage(diceP1,diceP2){
    
if (diceP1>diceP2){
    return "🚩Player 1 wins";
}
else if (diceP1 === diceP2){
    return "It's a draw!!";
}
else {
    return "Player 2 wins 🚩";
} 

}

function showWinnerMessage(winnerMessage){
document.querySelector("h1").innerHTML = winnerMessage;
}

function playGame(){
var diceP1 = throwDice();
var diceP2 = throwDice();
showWinnerMessage(getWinnerMessage(diceP1,diceP2));
showDices(diceP1,diceP2);

}

playGame();
