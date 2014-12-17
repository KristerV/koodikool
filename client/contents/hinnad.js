Template.Hinnad.helpers({
	selected: function() {
		return true;
	},
	fullWidth: function() {

		// Is full screen if on "Hinnad" page
		if (Router.current().route.getName() == "Hinnad")
			return true
	}
})