
var wins = 0;
var losses = 0;
var crystalPointsUno;
var crystalPointsDos;
var crystalPointsTres;
var crystalPointsCuatro;
var yourScore = 0;


var numberToMatch = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#numberToMatch").text(numberToMatch);


function crystalRandomizer(){
    crystalPointsUno = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystalPointsDos = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystalPointsTres = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystalPointsCuatro = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

function starter(){
    yourScore = 0; 
    crystalRandomizer();
}

starter();

function reset(){
numberToMatch = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#numberToMatch").text(numberToMatch);
yourScore = 0;
$("#yourScore").text(0);
}

function whoWon() {
    if (numberToMatch === yourScore) {
        wins += 1;
        $("#wins").text("Wins: " + wins);
        reset();
        alert("Winner, Winner Chicken Dinner!");
    
      
    };
    if (numberToMatch < yourScore) {
        losses += 1;
        $("#losses").text("Losses: " + losses);
        reset();
        alert("You were so close to winning, try again to collect them all!"); 
    };
}

$("#crystalUno").on("click", function() {
        yourScore += crystalPointsUno;
        $("#yourScore").text(yourScore);
        alert(" This crystal added " + crystalPointsUno + " magical points to your score");
        whoWon(); 
        
});


$("#crystalDos").on("click", function() {
    yourScore += crystalPointsDos;
    $("#yourScore").text(yourScore);
    alert(" This crystal added " + crystalPointsDos + " magical points to your score"); 
    whoWon(); 

});


$("#crystalTres").on("click", function() {
    yourScore += crystalPointsTres;
    $("#yourScore").text(yourScore);
    alert(" This crystal added " + crystalPointsTres + " magical points to your score"); 
    whoWon(); 
  
});


$("#crystalCuatro").on("click", function() {
    yourScore += crystalPointsCuatro;
    $("#yourScore").text(yourScore);
    alert(" This crystal added " + crystalPointsCuatro + " magical points to your score"); 
    whoWon(); 
   
});
///Still need to work on the following:
///the game doesn't display the final score before alerting of a win or loss--- need to fix this
///


