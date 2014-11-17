Template.Profile.helpers({
	days: function() {
		return ['Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede','Laupäev','Pühapäev']
	},
	hours: function() {
		var hours = []
		for (var i = 8; i <= 22; i++) {
			hours.push(i)
		};
		return hours
	}
})

Template.Profile.events({

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
		var day = t.parent().parent().attr('class')
		var hour = t.parent().parent().parent().attr('class')
		var originalCheckboxSelector = '.' + hour + ' .' + day + ' input'
		Session.set('originalCheckboxSelector', originalCheckboxSelector)
	},
	'mouseover .calendar span': function(e, tmpl) {
		if (Session.get('isMouseDown')) {
			var check = Session.get('checkboxChecked')

			// Check / uncheck currently hovered checkbox
			$(e.currentTarget.previousElementSibling).prop("checked", check)

			// Check / uncheck original checkbox
			var origChecbox = $(Session.get('originalCheckboxSelector'))
			if (check != origChecbox.is(':checked'))
				origChecbox.prop("checked", check)
		}
	},
	'mousemove .calendar': function(e, tmpl) {

		// Don't select label text
		e.preventDefault()
	}
})

$(document).mouseup(function(e){

	// Make sure checkbox dragging is deactivated
	Session.set('isMouseDown', false)
})