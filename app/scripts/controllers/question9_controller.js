App.Question9Controller = App.BaseController.extend({
	questionIndex: 9,
	timerDuration: 20,
	imageUrl: 'images/question7.jpg',
	answer: null,
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 15 };
			if (this.get('answer') == 3) score.points += 15;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});