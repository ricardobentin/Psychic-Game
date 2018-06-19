// Create an array of all of the letters in the alphabet. 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Create varibles for wins, losses and guesses
var wins = 0;
var losses = 0;
var guessesLeft= 9;
var guessedletters= [];
// print everything to the page
document.querySelector("#wins").innerHTML=wins;
document.querySelector("#losses").innerHTML=losses;
document.querySelector("#guesses").innerHTML=guessesLeft;

// Create a function to generate a random number between 0 and 26 to correspond to each letter of the alphabet
var computerGuess = letters[Math.floor(Math.random()* letters.length)];
document.querySelector("#cp").innerHTML=computerGuess; //delete before you submit!
// need to write logic to store the user's guess into an array and then use create a for loop that will loop 9 times and write the output into the #playerGuesses div 
//until the user runs out of guesses an then it will clear the div, and the game will start over

for (var i = 1; i < guessesLeft; i++){
    document.onkeyup = function(event) {
        guessesLeft--;
    // Determines which key was pressed.
    var userGuess = event.key;
    guessedLetters.push(userGuess);
    document.querySelector("#playerGuesses").innerHTML= guessedletters[i];
   }
}

 //once guess logic with the for loop is fixed, you need to write the conditional logic for how a user wins or loses 


