App.IndexController = Ember.Controller.extend({
	email: '',
	actions: {
		viewLoaded: function() {
			App.Sidebar.stopCountdown();
		},
		submit: function() {
			App.User.saveEmail(this.get('email'));
			this.transitionToRoute('question1');
		}
	}
});