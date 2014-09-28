MainCollection.allow({
	update: function (userId, doc, fields, modifier) {
		return true
	},
	remove: function (userId, doc) {
		return false
	},
	insert: function (userId, doc) {
		return true
	}
})