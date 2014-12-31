Router.configure({
	layoutTemplate: 'index',
	waitOn: function() {
		return Meteor.subscribe('applications')
	}
});

Router.onAfterAction(function(){

	// Deal with user hash
	// HACK - must be a more efficient way of doing this
	G.setUserHash(this)

	// Each time the route changes, activate another color scheme
	G.setRouteColor(this.url)
})

Router.route('/', function () {
	this.render('Home');
});

Router.route('/Koodikool')
Router.route('/Oppeprotsess')
Router.route('/JavaScript')
Router.route('/Hinnad')

Router.route('/Register')
