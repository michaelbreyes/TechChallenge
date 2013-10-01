App.Objects = App.Objects || {};

App.Objects.Sidebar = Ember.Object.extend({
	interval: null,
	duration: 0,
	logo: '',
	isStarted: false,
	currentView: null,
	setView: function(view) {
		this.currentView = view;
	},
	durationFormatted: function() {
		return this.get('duration').toMMSS();
	}.property('duration'),
	startCountdown: function(duration, logo, controller) {
		var self = this,
			interval = self.get('interval');
		if (interval) clearInterval(interval);
		self.set('duration', duration);
		self.set('logo', logo);
		self.set('interval', setInterval(function() {
			var dur = self.get('duration') - 1;
			self.set('duration', dur);
			if (dur <= 0) {
				clearInterval(self.get('interval'));
				self.currentView.send('transitionOut');
			}
		}, 1000));
	},
	stopCountdown: function() {
		clearInterval(this.get('interval'));
	}
});

App.Sidebar = new App.Objects.Sidebar();

Number.prototype.toMMSS = function () {
    var minutes = Math.floor(this / 60),
    	seconds = this - (minutes * 60);

    if (minutes < 10) {minutes = '0' + minutes;}
    if (seconds < 10) {seconds = '0' + seconds;}
    return minutes + ':' + seconds;
}