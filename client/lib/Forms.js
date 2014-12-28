Forms = {
	saveApplicationValue: function(field, value) {
		var userHash = Session.get("userHash")
		if (!userHash)
			return false

		Forms.createApplicationIfNone()

		var data = {}
		data[field] = value

		Applications.update(userHash, {$set: data})
	},
	createApplicationIfNone: function() {

		// Can't create without userHash
		var userHash = Session.get("userHash")
		if (!userHash)
			return false

		// Does app. exist?
		var application = Applications.findOne(userHash)
		console.log(application)
		if (!application) {
			Applications.insert({_id: userHash})
		}

	}
}