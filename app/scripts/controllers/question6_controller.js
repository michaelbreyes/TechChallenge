App.Question6Controller = App.BaseController.extend({
	questionIndex: 6,
	timerDuration: 15,
	imageUrl: 'images/question6.jpg',
	answer: null,
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 15 };
			if (this.get('answer') == 4) score.points += 15;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});