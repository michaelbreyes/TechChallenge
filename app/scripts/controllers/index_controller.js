App.IndexController = Ember.Controller.extend({
	email: 'mike.reyes@geneca.com',
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