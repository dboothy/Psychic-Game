var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var rand;



var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


gameStart();


document.onkeyup = function(event) {
	var userChoice = event.key;
	console.log(userChoice)

	if(letters.indexOf(userChoice) === -1){
		return;
	}

	if(guessesSoFar.indexOf(userChoice) === -1) {
		guessesSoFar.push(userChoice);


	}

	guessesLeft --;
	gameHtml =  "<p> Guesses so far: " + guessesSoFar.join(","); + "</p>"
	document.querySelector("#guessesSoFarPlace").innerHTML= gameHtml;
	gameHtml = "<p> Guesses left: " + guessesLeft + "</p>"
	document.querySelector("#guessesLeftPlace").innerHTML= gameHtml;




	if(userChoice.toLowerCase() === rand.toLowerCase()) {
		wins++;
		guessesLeft = 9;
		guessesSoFar = [];
		gameStart();

	} else if(guessesLeft <=0) {
		losses++;
		guessesLeft = 9;
		guessesSoFar = [];
		gameStart();
	}
}

function gameStart(){

	 rand = letters[Math.floor(Math.random() * letters.length)]

var gameHtml =	"<p>Wins: " + wins + "</p>"
		document.querySelector("#winsPlace").innerHTML =gameHtml

	gameHtml = "<p> Losses: " + losses + "</p>"
	document.querySelector("#lossesPlace").innerHTML = gameHtml

	gameHtml = "<p> Guesses left: " + guessesLeft + "</p>"
	document.querySelector("#guessesLeftPlace").innerHTML= gameHtml;

	gameHtml =  "<p> Guesses so far: " + guessesSoFar.join(","); + "</p>"
	document.querySelector("#guessesSoFarPlace").innerHTML= gameHtml;



};









