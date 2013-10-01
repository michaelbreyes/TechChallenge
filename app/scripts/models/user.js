App.Objects = App.Objects || {};

App.Objects.User = Ember.Object.extend({
	score: [],
	possible: 0,
	email: '',
	saveScore: function(question, score) {
		this.score[question-1] = score;
		localStorage.setItem(this.email, JSON.stringify(this.score));
	},
	saveEmail: function(email) {
		this.set('email', email);
		this.score =[];
	},
	totalScore: function() {
		var total = 0,
			possible = 0;
		//this.set('score', JSON.parse(localStorage.getItem('mike.reyes@geneca.com')));
		try {
			for (var i = 0, len = this.score.length; i < len; i++) {
				total += this.score[i].points;
				possible += this.score[i].possible;
			}
		} finally {}
		
		this.set('possible', possible);
		return total;
	}.property('score'),
	totalPossible: function() {
		return this.get('possible');
	}.property('')
});
App.User = new App.Objects.User();