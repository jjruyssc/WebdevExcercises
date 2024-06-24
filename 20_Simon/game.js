var gamePattern =[];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];


$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    gamePattern.push(userChosenColour);
    console.log('í was clicked' + userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    animatePress(userChosenColour);

})


function nextSequence(){
   
    const randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    playSound(randomChosenColour);
    $("."+randomChosenColour).animate({opacity: 0},500);
    $("."+randomChosenColour).animate({opacity: 1},500);
};

function playSound(name){
    var audio = new Audio('sounds/' + name + '.mp3')
    audio.preload = 'auto';
    return audio.play();
}

function animatePress(currentColour){
    $("."+currentColour).toggleClass("pressed");
}


window.nextSequence();