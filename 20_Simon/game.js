var gamePattern =[];
var buttonColors = ["red", "blue", "green", "yellow"];
function nextSequence(){
    const randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).animate({opacity: 0})
};
nextSequence();