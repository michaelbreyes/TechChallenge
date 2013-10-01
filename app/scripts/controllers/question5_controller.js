App.Question5Controller = App.BaseController.extend({
	questionIndex: 5,
	timerDuration: 25,
	imageUrl: 'images/question5.jpg',
	answer: null,
	class1: '',
	class2: '',
	class3: '',
	class4: '',
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 15 };
			if (this.get('answer') == 'ellen') score.points += 15;
			App.User.saveScore(this.questionIndex, score);
		},
		imageClick: function(name) {
			this.set('answer', name);
			if (name == 'kelly') this.setActiveImage(1);
			if (name == 'jay') this.setActiveImage(2);
			if (name == 'ellen') this.setActiveImage(3);
			if (name == 'oprah') this.setActiveImage(4);
		}
	},
	setActiveImage: function(index) {
		this.set('class1', '');
		this.set('class2', '');
		this.set('class3', '');
		this.set('class4', '');
		this.set('class' + index, 'bordered');
	}
});