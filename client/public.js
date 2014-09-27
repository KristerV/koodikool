Template.public.helpers({
	content: function() {
		if (!_.isUndefined(Collection.findOne('text')))
			return marked(Collection.findOne('text').text)
	}
})
