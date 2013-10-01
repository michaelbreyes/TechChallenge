App.Question10Controller = App.BaseController.extend({
	questionIndex: 10,
	timerDuration: 100,
	imageUrl: 'images/question10.jpg',
	answer1: '',
	answer2: '',
	answer3: '',
	answer4: '',
	answer5: '',
	answer6: '',
	answer7: '',
	answer8: '',
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 120 };
			if (this.get('answer1').toLowerCase() == "adobe") score.points += 15;
			if (this.get('answer2').toLowerCase() == "atari") score.points += 15;
			if (this.get('answer3').toLowerCase() == "toyota") score.points += 15;
			if (this.get('answer4').toLowerCase() == "cbs") score.points += 15;
			if (this.get('answer5').toLowerCase() == "twitter") score.points += 15;
			if (this.get('answer6').toLowerCase() == "javascript") score.points += 15;
			if (this.get('answer7').toLowerCase() == "mozilla") score.points += 15;
			if (this.get('answer8').toLowerCase() == "myspace") score.points += 15;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});