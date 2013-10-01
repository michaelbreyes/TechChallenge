App.IndexView = Ember.View.extend({
	didInsertElement: function() {
		this.get('controller').send('viewLoaded');
	}
})