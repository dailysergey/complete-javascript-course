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
	Question.prototype.checkAnswer = function (ans, callback) {
		console.log('Right answer: ' + this.rightAnswer);
		console.log('Your answer: ' + ans);
		var sc;
		if (this.rightAnswer === ans) {
			alert('Congrats, you are right!');
			sc = callback(true);
		} else {
			alert('Sorry, try another time.');
			sc = callback(false);
		}
		this.displayScore(sc);
	}
	Question.prototype.displayScore = function (score) {
		console.log('Your current score is: ' + score);
		console.log('------------------------');
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
			return sc;
		}
	}
	var keepScore = score();

	function nexQuestion() {

		var n = Math.floor(Math.random() * questions.length);
		questions[n].displayQuestion();
		var answer = prompt(questions[n].question);
		if (answer !== 'exit') {
			questions[n].checkAnswer(parseInt(answer), keepScore);
			nexQuestion();
		}
	}
	nexQuestion();
})();