App.Question1Controller = App.BaseController.extend({
	questionIndex: 1,
	timerDuration: 60,
	imageUrl: 'images/question11.jpg',
	answer1: '',
	answer2: '',
	answer3: '',
	actions: {
		saveScore: function() {
			var ans1 = this.get('answer1'),
				ans2 = this.get('answer2'),
				ans3 = this.get('answer3'),
				answer =  '#1: ' + ans1 + ', #2: ' + ans2 + ', #3: ' + ans3,
				score = { question: this.questionIndex, points: 0, possible: 15, answer: answer };
			if (ans1.length > 5) score.points += 5;
			if (ans2.length > 5) score.points += 5;
			if (ans3.length > 5) score.points += 5;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});