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
		if (!application) {
			Applications.insert({_id: userHash})
		}

	},
	saveFormValues: function(values) {

		var userHash = Session.get("userHash")
		if (!userHash)
			return false

		// into database
		Applications.update(userHash, {$set: values})

		// into email
		var body = ""
		_.each(values, function(value, key, list){
			if (key == 'times') {
				_.each(value, function(hours, day) {
					body += day + ": " + hours.join() + "\n"
				})
			} else {
				body += key + ": "
				body += value + "\n"
			}
		})
		Meteor.call('sendEmail', 'krister.viirsaar@gmail.com', 'postmaster@krister.ee', 'new application', body)
	}
}