var Letter = require("./letter");
var Word = require("./word");
var inquirer = require("inquirer");
var answers = require("./answers").answerArray;




var win = 0;
var guessesLeft = 10;

var guess = function() {
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
					// var victim = new Word({currentAnswer: answers[Math.floor(Math.random() * answers.length)]});
					var suspect = new Letter({});
				// victim.randomize();//choose word
				suspect.hideLetters();//hide word
				//display hidden word
				inquirer
					.prompt([
						{
							type: "input",
							message: "Guess a letter!",
							name: "firstguess",
							validate: function(value) {
								if (value === /^[a-zA-Z0-9]+$/) {
									return true;
									}
									return false;
								}
							}
						])
						.then(function(inquirerResponse) {
							// if () {

							// }
						})
		    } else {
		      console.log("\nThat's okay, we don't want to play with you anyway.\n");
		    }
		  });
		}

guess();


