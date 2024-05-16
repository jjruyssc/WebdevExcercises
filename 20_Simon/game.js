var gamePattern =[];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
   
    const randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    var audio = new Audio('sounds/'+ randomChosenColour + '.mp3');
    gamePattern.push(randomChosenColour);
    $("."+randomChosenColour).animate({opacity: 0},500);
    $("."+randomChosenColour).animate({opacity: 1},500);
    audio.play();

};
window.nextSequence();