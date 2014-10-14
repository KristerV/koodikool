Template.public.helpers({
	content: function() {
		if (!_.isUndefined(MainCollection.findOne('text')))
			return marked(MainCollection.findOne('text').text)
	}
})

Template.public.rendered = function() {
	var width = $(document).width()
	var height = $(document).height() + 500

	var t = new Trianglify({noiseIntensity: 0});
	var pattern = t.generate(width, height);
	$('body').css('background-image', pattern.dataUrl)
	// var t = new Trianglify({noiseIntensity: 0});
	// var pattern = t.generate(width, height);
	$('.sub-block').css('background-image', pattern.dataUrl)
}