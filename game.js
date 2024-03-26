var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var start = false;

$(document).keypress(function()
{
    if(!start)
    {
        $("#level-title").text("level " + level)
        nextSequence();
        start = true;
    }
})

$(".btn").click(function()
{
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})


function nextSequence() 
{

    userClickedPattern = [];

    level++; 
    $("#level-title").text("level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
}

function playsound(sound)
{
    var audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
}

function animatePress(click)
{
    $("#" + click).addClass("pressed");
    setTimeout(function()
    {
        $("#" + click).removeClass("pressed");
    }, 100)
}

function checkAnswer(currentlevel)
{
    if(gamePattern[currentlevel] === userClickedPattern[currentlevel])
    {
        console.log("success");
        if(userClickedPattern.length === gamePattern.length)
        {
            if(currentlevel < 4)
            {
                setTimeout(function()
                {
                    nextSequence();
                }, 1000)
            }
            else if(currentlevel < 8)
            {
                setTimeout(function()
                {
                    nextSequence();
                }, 600)
            }
            else if(currentlevel < 12)
            {
                setTimeout(function()
                {
                    nextSequence();
                }, 300)
            }
        }
    }
    else
    {
        console.log("wrong");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        }, 200)
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $(document).keypress(startOver());
    }
}

function startOver()
{
    gamePattern = [];
    level = 0;
    start = false;
}