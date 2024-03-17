function throwDice() {
    var diceNumber = Math.floor(((Math.random())*6) + 1);
    window.alert(diceNumber);
    return diceNumber;
}
var numbertest = throwDice();
console.log(numbertest);
window.alert(numbertest);