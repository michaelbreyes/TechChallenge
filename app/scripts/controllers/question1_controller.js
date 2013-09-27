App.Question1Controller = App.BaseController.extend({
	questionIndex: 1,
	init: function() {
		// (timeForQuestion, logoUrl)
		this.initValues(5, 'images/question1.png');
	},
	answer: null,
	actions: {
		submit: function() {
			App.Sidebar.stopCountdown();

			// Do storing logic here
			//alert('Selected is ' + this.get('answer'));

			this.transitionToRoute('question2');
		}
	}
});