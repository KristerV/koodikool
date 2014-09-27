Template.public.helpers({
	content: function() {
		if (!_.isUndefined(Collection.findOne('text')))
			return marked(Collection.findOne('text').text)
	}
})

Template.public.rendered = function() {
	var t = new Trianglify();
	var pattern = t.generate($(document).width(), $(document).height());
	document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
}