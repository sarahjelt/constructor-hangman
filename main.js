var Letter = require("./letter.js");
var Word = require("./word.js");
var answers = require("./answers.js").answersArray;
var inquirer = require("inquirer");


lettre = new Letter();
OK = new Guess();


function Guess() {
	// this.wins = 0;
	// this.guessesLeft = 10;

	this.HMMM = function() {
		inquirer
			.prompt([
			{
				type: "confirm",
				message: 'Welcome to Node Hangman! This is a momentous day! Type "y" to start.',
				name: "here"
			}
			])
			.then(function(inquirerResponse) {
				if (inquirerResponse.here) {
					lettre.hidden();//hide word
					console.log(lettre.werd.join(" "));
					lettre.guessesLeft--;
					startGame();
			    } else {
			    	console.log("\nThat's okay, we don't want to play with you anyway.\n");
			    	}
				})
			};

	this.YAY = function() {
		if (lettre.guessesLeft > 0) {
			inquirer
			.prompt([
				{
					type: "input",
					message: "Guess a letter!",
					name: "firstguess"
					//get validation working
					// validate: function thingy(value) {
					// 	return value !== !/^[a-zA-Z]+$/; 
					// }
				}
				])
				.then(function(resp) {
					Letter.prototype.changeName = function(userGuess) {
						this.userGuess = resp.firstguess;
					};
					lettre.changeName();
					lettre.doItFirst(resp.firstguess);

					OK.YAY();
				})//end then resp
			} else {
				console.log("You're out of guesses!");
			}
		};
}


OK.HMMM();

function startGame() {
	if (lettre.guessesLeft === 10) {
		OK.YAY();
	}
};
