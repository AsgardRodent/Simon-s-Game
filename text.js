var colorArray = ["red", "blue","green","yellow"];
var userClickedPattern = [];
var chosenColor;
var gamepattern = [];
var levelMax = 2;

for(var i = 0; i < levelMax; i++)
{
    RandomNumGenerator(colorArray, chosenColor, gamepattern);
}
//ColorBinder(gamepattern);
console.log(gamepattern);
buttonMapper();
for(var i = 0; i < levelMax; i++)
{
    userInput(userClickedPattern);
}




// Functions //


function RandomNumGenerator(arr, chosenColor, arr2)
{
    var pattern = Math.floor(Math.random() * 4);
    chosenColor = arr[pattern];
    arr2.push(chosenColor);
}

function buttonMapper()
{
    var userInputArray = [];
    //red button
    $("#red").click(function()
    {
        var sound = new Audio("./sounds/red.mp3");
        sound.play();
    });

    //blue button
    $("#blue").click(function()
    {;
        var sound = new Audio("./sounds/blue.mp3");
        sound.play();
    })

    //green button
    $("#green").click(function()
    {
        var sound = new Audio("./sounds/green.mp3");
        sound.play();
    })

    //yellow button
    $("#yellow").click(function()
    {
        var sound = new Audio("./sounds/yellow.mp3");
        sound.play();
    })
}

function userInput(userClickedPattern)
{
        $(".btn").click(function()
        {
            var userChosenColor = this.id;
            switch (userChosenColor) {
                case "#red":
                    userClickedPattern.push("red");
                    break;
                case "#yellow":
                        userClickedPattern.push("yellow");
                        break;
                case "#green":
                        userClickedPattern.push("green");
                        break;
                case "#blue":
                        userClickedPattern.push("blue");
                        break;
                default:
                        break;
            }
        })
}

/*function ColorBinder(gamepattern)
{
    var binderLength = gamepattern.length;
    for(var i = 0; i < binderLength; i++)
    {
        switch (gamepattern[i]) {
            case "red":
                $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                var audio = new Audio("sounds/red.mp3");
                audio.play();
                break;

            case "blue":
                $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                var audio = new Audio("sounds/blue.mp3");
                audio.play();
                break;

            case "green":
                $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                var audio = new Audio("sounds/green.mp3");
                audio.play();
                break;

            case "yellow":
                $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                var audio = new Audio("sounds/yellow.mp3");
                audio.play();
                break;

            default:
                break;
        }
    }
}*/