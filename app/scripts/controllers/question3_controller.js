App.Question3Controller = App.BaseController.extend({
	questionIndex: 3,
	timerDuration: 35,
	imageUrl: 'images/question3.jpg',
	answer1: null,
	answer2: null,
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 20 };
			if (this.get('answer1') == 50) score.points += 10;
			if (this.get('answer2') == 50) score.points += 10;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});