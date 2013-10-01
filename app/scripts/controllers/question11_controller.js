App.Question11Controller = App.BaseController.extend({
	questionIndex: 11,
	timerDuration: 60,
	imageUrl: 'images/question11.jpg',
	answer: null,
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 10, possible: 10, answer: this.get('answer') };
			App.User.saveScore(this.questionIndex, score);
		}
	}
});