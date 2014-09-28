Meteor.publish("main", function () {
	return MainCollection.find()
});