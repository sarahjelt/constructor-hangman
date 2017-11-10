var answers = require("./answers.js").answersArray;

function Word(currant) {
	this.currant = currant;
};

//put this in main.js?
// current = new Word(answers[Math.floor(Math.random() * answers.length)]);
// current.chooseCurrant();


module.exports = Word;