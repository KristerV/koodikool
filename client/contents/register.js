Template.Register.helpers({
	days: function() {
		return ['Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede','Laupäev','Pühapäev']
	},
	novemberDays: function() {
		var hours = [0,0,0,0,0,0]
		for (var i = 1; i <= 30; i++) {
			hours.push(i)
		};
		return hours
	},
	decemberDays: function() {
		var hours = [0]
		for (var i = 1; i <= 18; i++) {
			hours.push(i)
		};
		return hours
	},
	januaryDays: function() {
		var hours = [0,0,0,0]
		for (var i = 1; i <= 31; i++) {
			hours.push(i)
		};
		return hours
	},
	zero: function() {
		return parseInt(this) === 0
	}
})

Template.Register.events({

	// Start mouse dragging event
	'mousedown .calendar span': function(e, tmpl) {
		Session.set('isMouseDown', true)

		// Get input element
		var t = $(e.currentTarget.previousElementSibling)

		// Is is checked?
		var wasChecked = t.is(':checked')
		var nowChecked = !wasChecked
		Session.set('checkboxChecked', nowChecked)

		// Save original element for mouseover use
		var day = t.parent().parent().attr('data-day')
		var month = t.parent().parent().parent().attr('data-month')
		var originalCheckboxSelector = 'div[data-month="' + month + '"] div[data-day="' + day + '"] input'
		Session.set('originalCheckboxSelector', originalCheckboxSelector)
	},
	'mouseover .calendar span': function(e, tmpl) {
		if (Session.get('isMouseDown')) {
			var check = Session.get('checkboxChecked')

			// Check / uncheck currently hovered checkbox
			$(e.currentTarget.previousElementSibling).prop("checked", check)

			// Check / uncheck original checkbox
			var origChecbox = $(Session.get('originalCheckboxSelector'))
			if (check != origChecbox.is(':checked')) {
				var a = origChecbox.prop("checked", check)
			}
		}
	},
	'mousemove .calendar': function(e, tmpl) {

		// Don't select label text
		e.preventDefault()
	},
	'submit form[name="application"]': function(e) {
		e.preventDefault()
		var values = G.getFormValues('application')

		// Calendar values
		var checked = $('.calendar *:checked')
		var cal = {}
		_.each(checked, function(elem){
			var day = $(elem).parents('[data-day]').first().attr('data-day')
			var month = $(elem).parents('[data-month]').first().attr('data-month')
			if (day === "0")
				return
			if (!cal[month])
				cal[month] = []
			cal[month].push(day)
		})
		values['times'] = cal
		Forms.saveFormValues(values)
		alert("Avaldus on esitatud, võtame peatselt ühendust!")
	}
})

$(document).mouseup(function(e){

	// Make sure checkbox dragging is deactivated
	Session.set('isMouseDown', false)
})
