App.SubmitView = Ember.View.extend({
	click: function() {
		var $el = this.get('parentView').$(),
			self = this;
		$el.animate({'top': $(document).height() + 100}, 600, function() {
			self.get('controller').send('submit');
		});
	}
});