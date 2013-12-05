$(document).ready(function() {
    $(document).foundation();

    //Prototype variables
    var windowWidth 	= $(window).outerWidth(),
    	windowHeight	= $(window).outerHeight();
    
    //Article Gallery Plugin
    var $gallery 		= $('.supplementary > .gallery'),
    	$gallerySection = $gallery.find('.section');
    var gallerySections = $gallery.find('.section').length;
    $gallery.css({
    	'width': windowWidth * gallerySections
    });
    $gallerySection.each(function(i, el) {
    	$(el).css({
    		'width': windowWidth
    	});
    });
});
