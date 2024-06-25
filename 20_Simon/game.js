var gamePattern =[];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var gameStarted = false;


    $(document).keypress(function (e) { 
        if (gameStarted == false){
            nextSequence();
            gameStarted = true;
        }
    });
  



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

    $("h1").text("Level " +level);
    const randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    playSound(randomChosenColour);
    $("."+randomChosenColour).animate({opacity: 0},500);
    $("."+randomChosenColour).animate({opacity: 1},500);
    level++;
};

function playSound(name){
    var audio = new Audio('sounds/' + name + '.mp3')
    audio.preload = 'auto';
    return audio.play();
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    }, 100)
}


