# Psychic-Game

Hello

Welcome to PsychicGame by David Booth-Metwally

Here will include steps taken to create PsychicGame.

First, PsychicGame allows users to guess which key the PsychicGame is "thinking about".

Let's take a look.

First I will create some variables:

var winCount
var lossCount
var guessesLeft
var letterGuessed
var randomLetterGen
var GuessCounter 

winCount: counts number of times a user hits the key of a matching letter cycled within an array.


{

winCount = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


}




lossCount: counts number of times user chooses a letter wrong after 9 guesses.

guessesLeft: counts down from 9 the number of guesses allowed before arriving at 0 or before the user chooses a matching letter


letterGuessed: displays which letters were guessed by user before pressing a matching letter or until guessing 9 times wrong

randomLetterGen: selects a letter within an array for the user to match with 

guessCounter%: counts the number of guesses which manipulates the guessesLeft counter


so winCount,  ++ for loopn with a conditional if and else






