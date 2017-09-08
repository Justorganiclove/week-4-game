//Assign random Number to match at the start of the game:

function startGame() {
    var numberToMatch = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    document.getElementById("numberToMatch").innerHTML = numberToMatch;
    // for testing purposes:
    console.log(numberToMatch);
}
startGame();

//Designate random hidden values to each crystal between 1-12:
var crystalPoints1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

var crystalPoints2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

var crystalPoints3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

var crystalPoints4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


//For testing purposes: is there a way to show all these in a single line in console?
console.log("Crystal1: " + crystalPoints1);
console.log("Crystal2: " + crystalPoints2);
console.log("Crystal3: " + crystalPoints3);
console.log("Crystal4: " + crystalPoints4);


//Clicking each crystal adds up that number to Yourscore
$(function() {
    $("#crystal1").click(function() {
        document.getElementById("crystalPoints1").innerHTML = yourScore;
    })

});



//Restart function when the player wins or looses

//Record Scoreboard of Wins and losses


//***Do not refresh the page in order to start the game