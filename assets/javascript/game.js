// Global Scope __________________________________________________________________________________________________________

var yourScore; 
var wins;
var losses;
var numberToMatch;
var crystalPointsUno;
var crystalPointsDos;
var crystalPointsTres;
var crystalPointsCuatro;

//  Local Scope of function Start Game__________________________________________________________________________________________________________

function startGame() {
    var numberToMatch = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#numberToMatch").text(numberToMatch);
}

//  Local Scope of function crystalRandomizer____________________________________________________________________________________________________

function crystalRandomizer(){
    crystalPointsUno = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystalPointsDos = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystalPointsTres = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystalPointsCuatro = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

//  Local Scope of starter_______________________________________________________________________________________________________________________
function starter(){
    yourScore = 0; ///not sure if this is part of the problem
    startGame();
    crystalRandomizer();
}

starter(); /// Global execution of the starter function;

//  Local Scope of whoWon_______________________________________________________________________________________________________________________
function whoWon() {
    if (numberToMatch === yourScore) {
        console.log(test);////this isn't showing up
        wins += 1;
        $("#wins").text("Wins: " + wins);
        console.log("Great Job - You have a pocket full of Crystals");
      
    };
    if (numberToMatch < yourScore) {
        losses += 1;
        $("#losses").text("Losses: " + losses);
        console.log("You were so close, try again to collect them all!");
        starter();
    };
}
//  End of local Scope of whoWon_______________________________________________________________________________________________________________________

// Local Scope of on click crystalUno function__________________________________________________________________________________________________________
$("#crystalUno").on("click", function() {
        whoWon(); 
        yourScore += crystalPointsUno;
        $("#yourScore").text(yourScore);
        alert(" This crystal added " + crystalPointsUno + " magical points to your score");
        
});

// Local Scope of on click crystalDos function__________________________________________________________________________________________________________
$("#crystalDos").on("click", function() {
    whoWon(); 
    yourScore += crystalPointsDos;
    $("#yourScore").text(yourScore);
    alert(" This crystal added " + crystalPointsDos + " magical points to your score"); 

});

// Local Scope of on click crystalTres function__________________________________________________________________________________________________________
$("#crystalTres").on("click", function() {
    whoWon(); 
    yourScore += crystalPointsTres;
    $("#yourScore").text(yourScore);
    alert(" This crystal added " + crystalPointsTres + " magical points to your score"); 
  
});

// Local Scope of on click crystalCuatrofunction__________________________________________________________________________________________________________

$("#crystalCuatro").on("click", function() {
    whoWon(); 
    yourScore += crystalPointsCuatro;
    $("#yourScore").text(yourScore);
    alert(" This crystal added " + crystalPointsCuatro + " magical points to your score"); 
   
});



