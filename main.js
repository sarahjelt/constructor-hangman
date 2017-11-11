var Letter = require("./letter.js");
var Word = require("./word.js");
var answers = require("./answers.js").answersArray;
var inquirer = require("inquirer");

lettre = new Letter();
OK = new Guess();

function Guess() {

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
					lettre.hidden();
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
						if (lettre.werd.includes("_") === false && lettre.guessesLeft > 0) {
							lettre.wins++;
							// console.log("Congrats! You've won! Number of wins: " + this.wins);
							won();
						}
				})//end then resp
			} else {
				lettre.loss();
				inquirer
				.prompt([
					{
						type: "confirm",
						message: "\nYou're out of guesses! Would you like to play again?",
						name: "playagain"
						//get validation working
						// validate: function thingy(value) {
						// 	return value !== !/^[a-zA-Z]+$/; 
						// }
					}
					])
				.then(function(inquirerResponse) {
					if (inquirerResponse.playagain) {
						console.log(new Word(answers[Math.floor(Math.random() * answers.length)]).currant);
						lettre.clear();
						lettre.guessesLeft = 10;
						lettre.hidden();
						console.log(lettre.werd.join(" "));
						startGame();
					} else {
						console.log("\nOK, bye!\n");
					}
				})
			}
		};
};


function startGame() {
	if (lettre.guessesLeft === 10) {
		OK.YAY();
	}
};

function won() {
		inquirer
		.prompt([
			{
				type: "confirm",
				message: "\nYou won!! You've won " + lettre.wins + " times. Would you like to play again?",
				name: "winnerplayagain"
			}
			])
		.then(function(inquirerResponse) {
			if (inquirerResponse.winnerplayagain) {
				// console.log(new Word(answers[Math.floor(Math.random() * answers.length)]).currant);
				lettre.clear();
				lettre.guessesLeft = 10;
				lettre.hidden();
				console.log(lettre.werd.join(" "));
				startGame();
			} else {
				console.log("\nOK, bye!\n");
			}
		})
	}

OK.HMMM();

