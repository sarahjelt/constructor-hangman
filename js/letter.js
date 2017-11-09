// THIS FILE HOLDS THE FUNCTION TO CONVERT EACH LETTER OF THE CHOSEN ANSWER TO _ (HIDE FUNCTION)
var Word = require("./word");
//grab the victim and split into array of substrings, replace each letter with _, 

// var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var answers = require("./answers").answerArray;
var random = answers[Math.floor(Math.random() * answers.length)];
var currant = new Word ({currentAnswer: random});



var Letter = function(obj){
	// this.options = obj.options;
	this.werd = [];
	this.userPick = typeof obj.userPick;

	this.splitRandom = function() {

	};

	this.hideLetters = function() {
		console.log(random);
		for (i = 0; i < random.length; i++) {
			this.werd.push("_");
		}
		console.log(this.werd);
		// console.log(currant);
		// console.log(this.hideLetters());
	};

	// This method that creates a Word object from the constructor function we required and pushes it to the `this.cast` array
	this.addCastMember = function(currentWord) {
		this.word.push(new Word(currentWord));
	};
};



module.exports = Letter;