App.BaseController = Ember.ObjectController.extend({
	questionIndex: 0,
	actions: {
		viewLoaded: function() {
			App.ProgressBar.setQuestion(this.get('questionIndex'));
			var controller = this;
			App.Sidebar.startCountdown(controller.timerDuration, 
				controller.imageUrl, controller); 
		},
		stopQuestion: function() {
			App.Sidebar.stopCountdown();
		},
		loadNext: function() {
			this.send('saveScore');
			if (this.questionIndex == 12) {
				App.ProgressBar.finished();
				this.transitionToRoute('finished');
			} else {
				this.transitionToRoute('question' + (this.questionIndex + 1));
			}
		}
	}
});