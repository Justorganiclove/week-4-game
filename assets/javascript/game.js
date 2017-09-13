
var wins = 0;
var losses = 0;
var crystalPointsUno;
var crystalPointsDos;
var crystalPointsTres;
var crystalPointsCuatro;


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

function whoWon() {
    if (numberToMatch === yourScore) {
        console.log("test");////this isn't showing up
        wins += 1;
        $("#wins").text("Wins: " + wins);
        alert("Winner, winner Chicken Dinner! You have a pocket full of Crystals");

         ///The game is not resetting after a win or loss--gotta make this work
        function reset() {
            numberToMatch = 0;
            yourScore =0;
            };
        reset();
    
      
    };
    if (numberToMatch < yourScore) {
        losses += 1;
        $("#losses").text("Losses: " + losses);

        alert("You were so close, try again to collect them all!");

        ///The game is not resetting after a win or loss--gotta make this work/////
        function reset() {
            numberToMatch = 0;
            yourScore = 0;
            };
        reset();
 
       
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

