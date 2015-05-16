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

	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-52715750-6', 'auto');
	  ga('send', 'pageview');

})

Router.route('/', function () {
	this.render('Home');
});

Router.route('/Koodikool')
Router.route('/Oppeprotsess')
Router.route('/JavaScript')
Router.route('/Hinnad')

Router.route('/Register')
