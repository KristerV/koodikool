Template.admin.helpers({
	content: function() {
		if (!_.isUndefined(Collection.findOne('text')))
			return Collection.findOne('text').text
	},
	isAdmin: function() {
		return Session.get('admin')
	}
})

Template.admin.events({
	'submit form[name=text]': function(e, tmpl) {
		e.preventDefault()
		var value = $('textarea').val()

		if (_.isUndefined(Collection.findOne('text')))
			Collection.insert({_id: 'text', text: value})
		else
			Collection.update('text', {$set: {text: value}})
	}
})