App.Question11Controller = App.BaseController.extend({
	questionIndex: 11,
	timerDuration: 20,
	imageUrl: 'images/question1.png',
	answer: null,
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 10 };
			if (this.get('answer') == 2) score.points = 10;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});