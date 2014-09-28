Template.background.rendered = function() {

    var extraScroll = -($(document).height() - $(window).height()) / 1.1
    var width = $(document).width()
    var height = $(document).height() + extraScroll

    var t = new Trianglify({noiseIntensity: 0});
    var pattern = t.generate(width, height);
    $('.background').css('height', height)
    $('.background').css('background-image', pattern.dataUrl)
}

$(window).scroll( function(e) {

	// Get variables
    var currentScroll = $(document).scrollTop()
    console.log(currentScroll)
    var backgroundHeight = $('.background').height()
    var windowHeight = $(window).height()
    var documentHeight = $(document).height()

    // Calculations
    var maxDocumentScroll = documentHeight - windowHeight
    var documentScrollPercent = currentScroll / maxDocumentScroll
    var maxBackgroundScroll = backgroundHeight - windowHeight
    var backgroundScrollPercent = documentScrollPercent * maxBackgroundScroll

    // Set value
    $('.background').css('margin-top', -backgroundScrollPercent)
    console.log(backgroundScrollPercent)
})