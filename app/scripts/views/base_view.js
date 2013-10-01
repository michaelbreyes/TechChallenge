App.BaseView = Ember.View.extend({
	didInsertElement: function() {
		var self = this,
			$el = self.$();
		App.Sidebar.setView(self);
		$el.css('position', 'absolute');
		$el.css('top', '-' + $(document).height() + 'px');
		$el.animate({'top': 0}, 1000, function() {
			self.get('controller').send('viewLoaded');
		});
	},
	actions: {
		transitionOut: function() {
			var $el = this.$(),
				self = this;
			self.get('controller').send('stopQuestion');
			$el.animate({'top': $(document).height() + 100}, 600, function() {
				self.get('controller').send('loadNext');
			});
		}
	}
});