App.Question4Controller = App.BaseController.extend({
	questionIndex: 4,
	timerDuration: 35,
	imageUrl: 'images/question4.jpg',
	answer1: null,
	answer2: null,
	answer3: null,
	answer4: null,
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 40 };
			if (this.get('answer1') == 'cs') score.points += 10;
			if (this.get('answer2') == 'py') score.points += 10;
			if (this.get('answer3') == 'rb') score.points += 10;
			if (this.get('answer4') == 'md') score.points += 10;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});