App.Question2Controller = App.BaseController.extend({
	questionIndex: 2,
	timerDuration: 45,
	imageUrl: 'images/question2.png',
	answer1: null,
	answer2: null,
	answer3: null,
	answer4: null,
	content1: ['', 'SQL Server', 'Capistrano', 'InnoDB'],
	content2: ['', 'Sharepoint', 'MongoDB', 'HBase'],
	content3: ['', 'PostgreSQL', 'Neo4J', 'Riak'],
	content4: ['', 'Memcached', 'CouchDB', 'Cassandra'],
	actions: {
		saveScore: function() {
			var score = { question: this.questionIndex, points: 0, possible: 40 };
			if (this.get('answer1') == 'SQL Server') score.points += 10;
			if (this.get('answer2') == 'MongoDB') score.points += 10;
			if (this.get('answer3') == 'Riak') score.points += 10;
			if (this.get('answer4') == 'Cassandra') score.points += 10;
			App.User.saveScore(this.questionIndex, score);
		}
	}
});
