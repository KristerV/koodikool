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
	$('.sub-block').each(function(i){
		$(this)
			.css('background-image', pattern.dataUrl)
			.css('background-position', i * 3 + '0% 10%')
	})
}