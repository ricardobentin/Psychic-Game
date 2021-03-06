// Create an array of all of the letters in the alphabet. 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Create varibles for wins, losses, a placeholder array for all of the user's guesses and an array to hold the computer's selected letter.
var wins = 0;
var losses = 0;
var guessesLeft= 9;
var guessedLetters= [];
var computerGuessedLetters = [];
// print everything to the page
document.querySelector("#wins").innerHTML=wins;
document.querySelector("#losses").innerHTML=losses;
document.querySelector("#guesses").innerHTML=guessesLeft;
// Create a method to generate a random number between 0 and 26 to correspond to each letter of the alphabet and store it in the computerGuess variable
var computerGuess = letters[Math.floor(Math.random()* letters.length)];
//store computerGuess in the array called computerGuessedLetters
computerGuessedLetters.push(computerGuess);
    //Create a function that will listen to keystrokes
    document.onkeyup = function(event) {
        // Determine which key is pressed and store it in a variable called userGuess
        var userGuess = event.key; 
        // Store userGuess in an array called guessedLetters via the push method
        guessedLetters.push(userGuess);
        //print guessed letters to the div id playerGuesses in HTML
        document.querySelector("#playerGuesses").innerHTML= guessedLetters;  
            //Logic for wins. User wins only if they correctly guess the computer's letter AND they have at least 1 guess left
            if (userGuess === computerGuessedLetters[0] && guessesLeft>0) {
                //Increment wins by 1 when a user wins
                wins++;
                //print new value of wins in the div id wins
                document.querySelector("#wins").innerHTML=wins;
                //game resets at this point so give the user back 9 guesses and clear any guesses that the user has made. Also clearing the computer's selected letter.
                guessesLeft= 9;
                guessedLetters = [];
                computerGuessedLetters = [];
                // update the guesses left and the user's new guessed letters to the page
                document.querySelector("#guesses").innerHTML=guessesLeft;
                document.querySelector("#playerGuesses").innerHTML= guessedLetters;
                //computer selects a new letter and it stores it to computerGuessedLetters array via the push method
                computerGuess = letters[Math.floor(Math.random()* letters.length)];
                computerGuessedLetters.push(computerGuess);
            }
            //logic for if a user guesses incorrectly but still has at least 1 guess left
            else if(userGuess !== computerGuessedLetters[0] && guessesLeft>1) {
                //decrement guesses left
                guessesLeft--;
                //show the new value for guesses left in the div id guesses
                document.querySelector("#guesses").innerHTML=guessesLeft;
            }
            //logic for when a user does not correctly guess the computer's guess and they do not have any guesses left
            else {
                //increment losses by 1 when a user loses
                losses++;
                //show new value for losses in the div id losses
                document.querySelector("#losses").innerHTML=losses;
                //game resets at this point so give the user back 9 guesses and clear any guesses that the user has made. Also clearing the computer's selected letter.
                guessesLeft= 9;
                guessedLetters = [];
                computerGuessedLetters = [];
                // update the guesses left and the users' new guessed letters to the page
                document.querySelector("#guesses").innerHTML=guessesLeft;
                document.querySelector("#playerGuesses").innerHTML= guessedLetters;
                //computer selects a new letter and it stores it to computerGuessedLetters array via the push method
                computerGuess = letters[Math.floor(Math.random()* letters.length)];
                computerGuessedLetters.push(computerGuess);
            }
     }


