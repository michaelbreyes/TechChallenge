App.SubmitView = Ember.View.extend({
	click: function() {
		this.get('parentView').send('transitionOut');
	}
});