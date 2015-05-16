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
		$('#Register').css('background-color', color)

		// Activate button
		button.addClass('active-button')

	},
	removeRouteColor: function() {
		//:not(#Register)
		$('.menu a').css('background-color', 'transparent')
		$('.active-button').removeClass('active-button')
	},
	setUserHash: function(_this) {

		// Get raw info
		var userHash = _this.getParams().query.u
		var sessionVar = Session.get("userHash")
		var hash

		// If hash is already set
		if (!!sessionVar)
			return false

		// Either use hash from url or generate new one
		if (!!userHash) {
			hash = userHash
		} else {
			hash = G.generateHash()
		}

		// Set new hash
		Session.set("userHash", hash)

	},
	generateHash: function() {
		return Math.random().toString(36).substr(2, 8)
	},
	highlightPrice: function() {

		// What is current price?
		var application = Applications.findOne(Session.get('userHash'))
		var price = application.pakett

		// What elemet needs to be changed?
		var element = $('.register .hinnad .col[data-price="' + price + '"]')

		// Switch selection classes
		$('.pricebox-selected').removeClass('pricebox-selected')
		element.addClass('pricebox-selected')
	},
	getFormValues: function(formName) {
		if (formName instanceof jQuery)
			var values = formName.serializeArray()
		else
			var values = $('form[name="'+formName+'"]').serializeArray()
		var data = {}
		for (var i = 0; i < values.length; i++) {
			var a = values[i]
			data[a.name] = a.value
		};
		return data
	},
}