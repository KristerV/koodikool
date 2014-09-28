Meteor.publish("main", function () {
	return Collection.find()
});