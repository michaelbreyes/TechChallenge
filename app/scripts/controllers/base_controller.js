App.BaseController = Ember.ObjectController.extend({
	questionIndex: 0,
	initValues: function(time, logo) {
		App.ProgressBar.setQuestion(this.get('questionIndex'));
		var controller = this;
		setTimeout(function() { 
			App.Sidebar.startCountdown(time, logo, controller); 
		}, 1000);
	},
	actions: {
		viewFinishedLoading: function() {
		}
	}
});