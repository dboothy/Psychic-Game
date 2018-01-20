# Psychic-Game

Hello

Welcome to PsychicGame by David Booth-Metwally

Here will include steps taken to create PsychicGame.

First, PsychicGame allows users to guess which key the PsychicGame is "thinking about".



_______________________________

PseudoCode{



PsychicGame:

1. Game loads;
	a. RandomLetter Chosen from Array
	b. Wins are set to 0
	c. Losses set to 0
	d. Guesses Left set to 9
	e. Guesses so far set to: x (letter determined for user to input)
	f. Title and instructions are Displayed
	g. Onclick letter, win score, guesses left, guesses so far, loss score increase and decrease accordingly and game reset occurs

2. Game resets:
	a. new random letter chosen from array
	b. Score changes
		i. Wins goes up by 1 (or)
		ii. Losses goes up by 1
	c. Guesses Left goes back to 9
	d. Your guesses so far goes back to x (letter determined for user to input
	e. Onclick letter, win score, guesses left, guesses so far, loss score increase and decrease accordingly and game reset occurs


3. user hits matching key
	a. Wins goes up by 1
	b. game resets

4. user hits unmathing key
	a. “guess so far” displays pressed key
	b. “guesses left” decreases by 1

5. Guesses left dereases to 0
	a. Losses goes up by 1
	b. game resets
	


_______________________________________________________________________________________________


// rand = random string chosen from array. This string can be matched by a user upon hittting a key that corresponds with the value of the string. when the user matches the string value  with their key press, this will increase the value of the wins. If the user hits a key that is not the same value as the chosen string the value of Guesses left decreases by 1 each time with each unmatching key press. The unmatched key press displays under guesses so far. when guesses left value decreases to 0, the value of loss increases by 1. When the value of win or lose increases by 1, the game is reset//

_______________________________________________________________________________________________

RandomLetter= letter produced by math function


UserChoice= letter user chooses with a key press

KeyPress = when user hits a key


RightChoice = user key that matches RandomLetter and that = Wins ++


WrongChoice = user key that does not match letter produced by Random Letter = Guesses - -


SubtractGuess = takes away 1 guesses from total number of guesses allowed 


AddWinToScore = increases the Wins up by 1

DisplayWinScore = displays the math of the score of the number of time user wins

DisplayLostScore = number goes up by one when user uses up all guesses

DisplayGuessesLeft = displays number of guesses, subtracts when user chooses unmatching letter 


DisplayGuessLetter = UserChoice


When user hits letter matching RandomLetter, Win goes up by 1 and game resets with GuessesAllowed back to 9 and a new letter generated to for user to match with Random Letter, but number of Wins still Counted.

When user Guesses and it’s wrong, their guess is displayed under Guesses so Far. After 9 unmatching guesses, the GuessesSoFar Display goes back to 0. and Loss number goes up by 1.


}


GameReset picks a new letter from array, sets UserGuesses back to 0 and Guesses Allowed back to 9. GameReset is activated by a GameWin or a GameLoss.


GameReset{

Win= Y
Loss = Y

Guesses Left = 9

Your Guesses = x

}

GameWin{

Win = 1 or <
Losses = Y
Guesses Left: 9
Your Guess = X

}


GameLoss{

Win = Y
Losses = 1 or <


	







}
















First I will create some variables:

var winCount
var lossCount
var guessesLeft
var letterGuessed
var randomLetterGen
var GuessCounter 
var letters


winCount: counts number of times a user hits the key of a matching letter cycled within an array.


lossCount: counts number of times user chooses a letter wrong after 9 guesses.

guessesLeft: counts down from 9 the number of guesses allowed before arriving at 0 or before the user chooses a matching letter


letterGuessed: displays which letters were guessed by user before pressing a matching letter or until guessing 9 times wrong

randomLetterGen: selects a letter within an array for the user to match with 

guessCounter%: counts the number of guesses which manipulates the guessesLeft counter


so winCount,  ++ for loopn with a conditional if and else



for(var i=0; i < letters.length; i++)


{

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

}

I want to run all of the strings in the array letters 

so I want to loop all of the strings in the array called letters but only call the string that matches the randomnumber with the strings' ordered number.

so it will look something like  Pyschic number = goThroughAllNumbers only ===RandomGenNumber by other function

so what happens first 1. Random number generated that matches number of strings within array( 0-15)


*Update*

I found a conditional from the activities that will be useful for this PsychicGame... yay.

--  - - - - ---- - -----------

OK, next approach.

I have an array in which all the strings within it are assigned numbers which could be the possible answers based on the selection of random number generator.

So 1. Array with 26 strings. (0-25)

and 2. numbergenerator picks from 0-25

the string corresponding to the numbergenarators pick will be chosen as the string user will have to guess to win the game. 

this can happen when the game is reset and when the page loads. that is one of the first things to occur.


______

Allow user to click on something and it could be the answer, if they hit the answer, they win and wins goes up, if they hit something else they lose a guess.


document.onkeyup = function(event){

	var rand = event.key;


just keeping those functions here for later use.


__________________________________

PsychicGame{


RandomLetter= letter produced by math function


UserChoice= letter user chooses with a key press

KeyPress = when user hits a key


RightChoice = user key that matches RandomLetter and that = Wins ++


WrongChoice = user key that does not match letter produced by Random Letter = Guesses - -


SubtractGuess = takes away 1 guesses from total number of guesses allowed 


AddWinToScore = increases the Wins up by 1

DisplayWinScore = displays the math of the score of the number of time user wins

DisplayLostScore = number goes up by one when user uses up all guesses

DisplayGuessesLeft = displays number of guesses, subtracts when user chooses unmatching letter 


DisplayGuessLetter = UserChoice


When user hits letter matching RandomLetter, Win goes up by 1 and game resets with GuessesAllowed back to 9 and a new letter generated to for user to match with Random Letter, but number of Wins still Counted.

When user Guesses and it’s wrong, their guess is displayed under Guesses so Far. After 9 unmatching guesses, the GuessesSoFar Display goes back to 0. and Loss number goes up by 1.


}


GameReset picks a new letter from array, sets UserGuesses back to 0 and Guesses Allowed back to 9. GameReset is activated by a GameWin or a GameLoss.


GameReset{

Win= Y
Loss = Y

Guesses Left = 9

Your Guesses = x

}

GameWin{

Win = 1 or <
Losses = Y
Guesses Left: 9
Your Guess = X

}


GameLoss{

Win = Y
Losses = 1 or <










