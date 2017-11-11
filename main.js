var Letter = require("./letter.js");
var Word = require("./word.js");
var answers = require("./answers.js").answersArray;
var inquirer = require("inquirer");

lettre = new Letter();
OK = new Guess();

//overall game functionality
function Guess() {
	this.START = function() {
		inquirer
			.prompt([
			{
				type: "confirm",
				message: 'Welcome to fruits-and-vegetables-themed Node Hangman! This is a momentous day! Type "y" to start.',
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

	//letter guessing and win/loss checker functions
	this.GAMEPLAY = function() {
		if (lettre.guessesLeft > 0) {
			inquirer
				.prompt([
				{
					type: "input",
					message: "Guess a letter!",
					name: "firstguess"
				}
				])
				.then(function(resp) {
					if (lettre.guessesLeft > 0) {
						lettre.doItFirst(resp.firstguess);
					};
					if (lettre.werd.includes("_") === false && lettre.guessesLeft > 0) {
						won();
					} else {
						OK.GAMEPLAY();
					}
				})
		} else {
			lettre.loss();
			inquirer
				.prompt([
				{
					type: "confirm",
					message: "\nYou're out of guesses! Would you like to play again?",
					name: "playagain"
				}
				])
				.then(function(inquirerResponse) {
					if (inquirerResponse.playagain) {
						current = new Word(answers[Math.floor(Math.random() * answers.length)]);
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
	}
};

function startGame() {
	if (lettre.guessesLeft = 10) {
		OK.GAMEPLAY();
	}
};

function won() {
	lettre.clear();
	lettre.wins++;
	console.log("\nYou won!! You've won " + lettre.wins + " times. Next word...");
	lettre.guessesLeft = 10;
	current = new Word(answers[Math.floor(Math.random() * answers.length)]);
	lettre.hidden();
	console.log(lettre.werd.join(" "));
	OK.GAMEPLAY();
}

OK.START();