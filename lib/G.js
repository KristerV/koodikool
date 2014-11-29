G = {
	generateRouteColors: function() {
		var count = $('.menu a:not(a[href="/MinuAvaldus"])').length
		var colorStep = 360 / count
		var colors = []
		for (var i = 0; i < count; i++) {
			colors.push(Please.make_color({
				hue: colorStep * i,
				golden: false,
				saturation: .7,
				value: .6
			}))
		};
		Session.set('routeColors', colors)
		$('#Profile').css('background-color', colors[colors.length-1])
	},
	setRouteColor: function(route) {

		// Get color range
		var colors = Session.get("routeColors")
		if (!colors)
			return false

		// Disable buttons
		G.removeRouteColor()

		// Get button and it's index
		var button = $('.menu a[href="'+route+'"]')
		var index = button.index()

		// Get color
		console.log(route)
		var color
		if (!route || route == document.URL)
			color = colors[0]
		else
			color = colors[index]

		// Use color
		if (index > 0) // skip logo
			button.css('background-color', color)
		$('body').css('background-color', color)
		$('#logo').css('color', color)

		// Activate button
		button.addClass('active-button')
	},
	removeRouteColor: function() {
		$('.menu a:not(#Profile)').css('background-color', 'transparent')
		$('.active-button').removeClass('active-button')
	}
}