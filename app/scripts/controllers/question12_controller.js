App.Question12Controller = App.BaseController.extend({
	questionIndex: 12,
	timerDuration: 25,
	imageUrl: 'images/question12.jpg',
	answer: null,
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 10 };
			if (this.get('answer') == 3) score.points = 10;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});