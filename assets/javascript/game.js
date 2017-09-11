var yourScore;
var wins;
var losses;
var numberToMatch;
var crystalPointsUno;
var crystalPointsDos;
var crystalPointsTres;
var crystalPointsCuatro;

function startGame() {
    var numberToMatch = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#numberToMatch").text(numberToMatch);
    yourScore = 0;
    $("#yourScore").text(yourScore);

}
function crystalRandomizer(){
    crystalPointsUno = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystalPointsDos = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystalPointsTres = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    crystalPointsCuatro = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

function starter(){
    startGame();
    crystalRandomizer();
};
starter();

function whoWon() {
    if($("#numberToMatch") === ($("#yourScore"))) {
        wins += 1
        $("#wins").text("Wins: " + wins);
        console.log("Great Job - You have a pocket full of Crystals")
      
    };
    if ($("#numberToMatch") < ($("#yourScore"))) {
        losses += 1
        $("#losses").text("Losses: " + losses);
        console.log("You were so close, try again to collect them all!")
        starter();
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
        // $("#yourscore").text(crystalPointsDos); 
        alert(" This crystal added " + crystalPointsDos + " magical points to your score"); 
    });

    $("#crystalTres").on("click", function() {
        yourScore += crystalPointsTres;
        $("#yourScore").text(yourScore);
        alert(" This crystal added " + crystalPointsTres + " magical points to your score"); 

    });

    $("#crystalCuatro").on("click", function() {
        yourScore += crystalPointsCuatro;
        $("#yourScore").text(yourScore);
        alert(" This crystal added " + crystalPointsCuatro + " magical points to your score"); 
    });














//***Do not refresh the page in order to start the game