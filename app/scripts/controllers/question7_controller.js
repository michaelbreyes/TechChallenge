App.Question7Controller = App.BaseController.extend({
	questionIndex: 7,
	timerDuration: 80,
	imageUrl: 'images/question9.jpg',
	answer1: '',
	answer2: '',
	answer3: '',
	answer4: '',
	answer5: '',
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 50 };
			if (this.get('answer1').toLowerCase() == "blade runner") score.points += 10;
			if (this.get('answer2').toLowerCase() == "the matrix") score.points += 10;
			if (this.get('answer3').toLowerCase() == "mission impossible") score.points += 10;
			if (this.get('answer4').toLowerCase() == "office space") score.points += 10;
			if (this.get('answer5').toLowerCase() == "patriot games") score.points += 10;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});