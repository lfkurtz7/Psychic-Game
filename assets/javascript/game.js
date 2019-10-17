var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var computerChoice = ["a", "b", "c", "d", "e", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(computerChoice);

 

var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text"); // do i keep the same name for this variable?//
var winsText = document.getElementById("wins-span");
var lossesText = document.getElementById("losses-span");
var guessesLeftText = document.getElementById("guessesLeft-span");
var guessesSoFarText = document.getElementById("guessesSoFar-span");

winsText.textContent= wins;
lossesText.textContent= losses;
guessesLeftText.textContent= guessesLeft;
guessesSoFarText.textContent= guessesSoFar; 


document.onkeyup = function (event) {
    var userChoice = event.key;
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)]; // showing up as undefined//

    if (userChoice === computerGuess) {
        wins++

        
        winsText.textContent= wins;  
        


    } else {
        losses++;

        guessesSoFar.push(userChoice);
        guessesSoFarText.textContent = guessesSoFar;
        lossesText.textContent = losses;
        console.log(guessesSoFar);



        //add any letters guessed so far to GuessedSoFar .push, display on screen guesssofar text to display. 
    }

    

};

