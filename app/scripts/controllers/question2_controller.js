App.Question2Controller = App.BaseController.extend({
	questionIndex: 2,
	init: function() {
		// (timeForQuestion, logoUrl)
		this.initValues(5, 'images/question1.png');
	},
	actions: {
		submit: function() {
			App.Sidebar.stopCountdown();

			// Do storing logic here

			this.transitionToRoute('question3');
		}
	}
});