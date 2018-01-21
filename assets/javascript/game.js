var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var rand = letters[Math.floor(Math.random() * letters.length)];





function GameStart(){

var gameHtml = "<p>Wins:" + wins + "</p>"
document.querySelector("#winsPlace").innerHTML = gameHtml;

var gameHtml = "<p> Losses:" + losses + "</p>"
document.querySelector("#lossesPlace").innerHTML = gameHtml;

var gameHtml = "<p> Guesses left:" + guessesLeft + "</p>"
document.querySelector("#guessesLeftPlace").innerHTML = gameHtml;

var gameHtml = "<p> Guesses so far:" + guessesSoFar.join + "</p>"
document.querySelector("#guessesSoFarPlace").innerHTML = gameHtml;

}

GameStart();

document.onkeyup = function(event) {
	var userChoice = event.key;
	if (userChoice === rand){
		checkLetter(userChoice)
	}

};





