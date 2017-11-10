// THIS FILE HOLDS THE FUNCTION TO CONVERT EACH LETTER OF THE CHOSEN ANSWER TO _ (HIDE FUNCTION)
var Word = require("./word");

// var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var answers = require("./answers").answerArray;
// var random = answers[Math.floor(Math.random() * answers.length)];
// var currant = new Word ({currentAnswer: random});

var Letter = function(obj){
	// this.options = obj.options;
	this.werd = [];
	this.random = answers[Math.floor(Math.random() * answers.length)];
	this.userPick = typeof obj.userPick;
	this.currant = new Word ({currentAnswer: this.random});
	this.userGuess = typeof obj.userGuess;

	this.hideLetters = function() {
		console.log(this.random);
		for (i = 0; i < this.random.length; i++) {
			this.werd.push("_");
		}
		// console.log(this.werd);
		console.log(this.werd.join(" "));
		// console.log(currant);
		// console.log(this.hideLetters());
	};
	this.compare = function (userGuess) {
		// console.log(this.random);
			for (i = 0; i < this.random.length; i++) {
				if (this.random.charAt(i) === inquirerResponse) {
					this.werd.splice(i, 1, inquirerResponse);
				} else {
					console.log("Sorry! Guess again!");
					guessesLeft--;
					console.log(guessesLeft);
				}
				if (this.werd.includes("_") === false) {
					win++;
					console.log(win);
				}
			}
		}
	// This method that creates a Word object from the constructor function we required and pushes it to the `this.cast` array
	// this.addCastMember = function(currentWord) {
	// 	this.word.push(new Word(currentWord));
	// };
};



module.exports = Letter;