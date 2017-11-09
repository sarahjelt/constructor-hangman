// THIS FILE HOLDS THE ANSWER-PICKER FUNCTION

var Letter = require("./letter");
var answers = require("./answers").answerArray;
var random = answers[Math.floor(Math.random() * answers.length)];


var Word = function(obj){
	this.currentAnswer = typeof obj.currentAnswer;
	this.answers = typeof obj.answers;


	// this.randomize = function() {
	// 	console.log(random);
	// }

};


module.exports = Word;