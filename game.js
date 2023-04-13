
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0 ;



$(document).keydown(function () {
    if (started === false) {
        $("#level-title").text( "Level " + level )
        nextSequence();
        started = true ;
    }

})

$(".btn").click(function () {
    var userChosenColour = this.id;
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);


})

function checkAnswer(currentLevel) {
    if ( gamePattern[currentLevel] ===  userClickedPattern[currentLevel ] ) {
        console.log("success");


        if (userClickedPattern.length === gamePattern.length ) {

            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
      

    }
    else {
        $("body").addClass("game-over")

        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
        console.log("wrong");
    }
}


function nextSequence() {

    userClickedPattern = [];
    level ++ ;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)
    console.log(gamePattern);

    $("#" + randomChosenColour).fadeOut(20).fadeIn(20);

    // var audio = new Audio ("sounds/"+ randomChosenColour + ".mp3")
    // audio.play();

    playSound(randomChosenColour);


}


// var audio1 = new Audio("/sounds/green.mp3");
// var audio2 = new Audio("/sounds/red.mp3");
// var audio3 = new Audio("/sounds/yellow.mp3");
// var audio4 = new Audio("/sounds/blue.mp3");
// $("#green").click(function () {
//     audio1.play();
// })
// $("#red").click(function () {
//     audio2.play();
// })
// $("#yellow").click(function () {
//     audio3.play();
// })
// $("#blue").click(function () {
//     audio4.play();
// })

function playSound(name) {


    switch (name) {
        case "green":
            var audio1 = new Audio("sounds/green.mp3");
            audio1.play();
            break;
        case "red":
            var audio2 = new Audio("sounds/red.mp3");
            audio2.play();
            break;
        case "yellow":
            var audio3 = new Audio("sounds/yellow.mp3");
            audio3.play();
            break;
        case "blue":
            var audio4 = new Audio("sounds/blue.mp3");
            audio4.play();
            break;

        default:
            break;
    }

}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}


// nextSequence();



