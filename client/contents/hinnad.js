Template.Hinnad.helpers({
	fullWidth: function() {

		// Is full screen if on "Hinnad" page
		if (Router.current().route.getName() == "Hinnad")
			return true
	},
	selected: function() {
		console.log(this)
	}
})

Template.Hinnad.events({
	'click a.btn.select': function(e, tmpl) {
		var userHash = Session.get('userHash')

		// What price was selected?
		var price = $(e.currentTarget).parent().find('.price')[0].textContent

		// Convert into nr
		switch (price) {
			case "Tasuta":
				var price = 0
				break
			case "80€":
				var price = 80
				break
			case "200€":
				var price = 200
				break
		}

		// Save value
		Forms.saveApplicationValue('pakett', price)

		// Change price glow
		G.highlightPrice()
	}
})

Template.Hinnad.rendered = function() {
	G.highlightPrice()
}