var Word = require("./word.js");
var answers = require("./answers.js").answersArray;
var Guess = require("./main.js");

current = new Word(answers[Math.floor(Math.random() * answers.length)]);

function Letter(userGuess) {
	this.guessesLeft = 11;
	this.wins = 0;
	this.werd = [];
	this.userGuess = userGuess;

	this.hidden = function () {
		for (i = 0; i < current.currant.length; i++) {
			this.werd.push("_");
		}
	};

	this.doItFirst = function(userGuess) {
		if (current.currant.includes(userGuess)) {
			this.compare(userGuess);
		} else {
			this.guessesLeft--;
			console.log("Nope! " + this.guessesLeft + " guesses left!");
			console.log(this.werd.join(" "));
		}
	};

	this.compare = function (val1) {
		for (i = 0; i < current.currant.length; i++) {
			if (current.currant.charAt(i) === val1) {
				this.werd.splice(i, 1, val1);
				this.render();
			}
		}
	};

	this.render = function() {
		console.log(this.werd.join(" "));
		console.log("You have " + this.guessesLeft + " guesses left");
	};

	this.loss = function() {
		this.werd.splice(0, this.werd.length);
		this.werd.push(current.currant.split("").join(" "));
		console.log('The answer was "' + this.werd.toString() + '" !');
	};

	this.clear = function() {
		this.werd.splice(0, this.werd.length);
	}
}

module.exports = Letter;