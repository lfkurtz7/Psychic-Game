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

Start();

document.onkeyup = function (event) {
    var userChoice = event.key;
    var computerGuess = getRandomIndex(computerChoice)
    


    if (userChoice === computerGuess) {
        wins++
        Start();
    }
    else if (guessesSoFar.includes(userChoice)) {
        alert("You've already guessed this");
    }
    else {
        guessesLeft--;
        if (guessesLeft === 0) {
            losses++;
            Start();
        }

        guessesSoFar.push(userChoice)
        guessesLeftText.textContent = guessesLeft
        guessesSoFarText.textContent = guessesSoFar;

        console.log(guessesSoFar, computerGuess);

    }
};
function Start() {
    guessesLeft = 10;
    guessesLeftText.textContent = guessesLeft;

    guessesSoFar = [];
    guessesSoFarText.textContent = guessesSoFar;

    winsText.textContent = wins;
    lossesText.textContent = losses;
};
function getRandomIndex(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

