Meteor.publish("applications", function () {
	return Applications.find()
})