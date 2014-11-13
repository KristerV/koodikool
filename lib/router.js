Router.configure({
	layoutTemplate: 'index',
});

Router.onAfterAction(function(){

	// Each time the route changes, reactivate another color scheme
	G.setRouteColor(this.url)
})

Router.route('/', function () {
	this.render('Home');
});

Router.route('/Koodikool')
Router.route('/Oppeprotsess')
Router.route('/JavaScript')
Router.route('/Minust')
