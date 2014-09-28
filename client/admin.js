Template.admin.helpers({
	content: function() {
		if (!_.isUndefined(MainCollection.findOne('text')))
			return MainCollection.findOne('text').text
	},
	isAdmin: function() {
		return Session.get('admin')
	}
})

Template.admin.events({
	'submit form[name=text]': function(e, tmpl) {
		e.preventDefault()
		var value = $('textarea').val()

		if (_.isUndefined(MainCollection.findOne('text')))
			MainCollection.insert({_id: 'text', text: value})
		else
			MainCollection.update('text', {$set: {text: value}})
	}
})

Template.admin.rendered = function() {
	Meteor.setTimeout(function(){
		$('textarea').elastic()
	}, 1000)
}