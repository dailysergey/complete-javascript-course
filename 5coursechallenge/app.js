(function () {
	function Question(question, answer, rightAnswer) {
		this.question = question;
		this.answer = answer;
		this.rightAnswer = rightAnswer;
	};

	Question.prototype.displayQuestion = function () {
		console.log(this.question);
		for (var i = 0; i <
			this.answer.length; i++) {
			console.log(i + ': ' + this.answer[i]);
		}
	}
	Question.prototype.checkAnswer = function (maybeAnswer) {
		console.log('Right answer: ' + this.rightAnswer);
		console.log('Your answer: ' + maybeAnswer);
		if (this.rightAnswer === maybeAnswer) {
			alert('Congrats, you are right!');
		} else {
			alert('Sorry, try another time.');
		}
	}


	var q1 = new Question("What\'s up?", ['Okay', 'Alright', 'Can be better!'], 2);
	var q2 = new Question('How is on duty today', ['Jonas', 'John', 'Me'], 0);
	var q3 = new Question('How long does it take?', ['1 minute', '5 minutes', '1 year'], 1);
	var questions = [q1, q2, q3];

	function score() {
		var sc = 0;
		return function (correct) {
			if (correct) {
				sc++;
			}
			return score;
		}
	}
	var keepScore = score();

	function nexQuestion() {

		var n = Math.floor(Math.random() * questions.length);
		questions[n].displayQuestion();
		var answer = prompt(questions[n].question);
		if (answer !== 'exit') {
			questions[n].checkAnswer(parseInt(answer));
			nexQuestion();
		}

	}
	nexQuestion();
})();