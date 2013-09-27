App.BaseView = Ember.View.extend({
	didInsertElement: function() {
		var self = this,
			$el = self.$();
		$el.css('position', 'absolute');
		$el.css('top', '-' + $(document).height() + 'px');
		$el.animate({'top': 0}, 1000, function() {
			self.get('controller').send('viewFinishedLoading');
		});
	}
});