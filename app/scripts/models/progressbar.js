App.Objects = App.Objects || {};

App.Objects.ProgressBar = Ember.Object.extend({
	current: 1,
	total: 12,
	setQuestion: function(idx) {
		this.set('current', idx);
	},
	progressbars: function() {
		var sections = [],
			current = this.get('current') - 1;
		for (var i = 0; i < this.total; i++) {
			sections[i] = (i >= current) ? false : true;
		}
		return sections;
	}.property('current'),
	progress: function() {
		if (this.current > this.total) return 'Complete';
		return this.current + ' of ' + this.total;
	}.property('current'),
	finished: function() {
		this.set('current', this.total + 1);
	}
});
App.ProgressBar = new App.Objects.ProgressBar();