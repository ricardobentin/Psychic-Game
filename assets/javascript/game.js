// Create an array of all of the letters in the alphabet. 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Create varibles for wins, losses and guesses
var wins = 0
var losses = 0
var guessesLeft= 9
// print everything to the page
document.querySelector("#wins").innerHTML=wins;
document.querySelector("#losses").innerHTML=losses;
document.querySelector("#guesses").innerHTML=guessesLeft;

// Create a function to generate a random number between 0 and 26 to correspond to each letter of the alphabet
var computerGuess = letters[Math.floor(Math.random()* letters.length)];
document.querySelector("#cp").innerHTML=computerGuess;
// need to write logic to store the user's guess
document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    document.querySelector("#playerGuesses").innerHTML= userGuess;
}
    

