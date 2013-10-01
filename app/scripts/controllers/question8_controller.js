App.Question8Controller = App.BaseController.extend({
	questionIndex: 8,
	timerDuration: 25,
	imageUrl: 'images/question3.jpg',
	answer: null,
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 20 };
			if (this.get('answer') == 1) score.points += 20;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});