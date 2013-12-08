$(document).ready(function() {
    $(document).foundation();

    var sideNavWidth = 160;

    var $primaryContent = $('#page'),
        $topBar = $('#top-bar'),
        $sideNavToggle = $('#side-nav-toggle');

    //Master Layout
    $('#content-scrollable').css({
        height: ( $(window).outerHeight() - $topBar.outerHeight() )
    });

    // Snap.js
    var snapper = new Snap({
        element: document.getElementById('page'),
        disable: 'right',
        hyperextensible: false,
        maxPosition: sideNavWidth
    });
    $sideNavToggle.on('click touchEnd', function(){

        if( snapper.state().state=="left" ){
            snapper.close();
        } else {
            snapper.open('left');
        }

    });
    // AppScroll.js
    var scroller = new AppScroll({
        toolbar: document.getElementById('top-bar'),
        scroller: document.getElementById('content-scrollable')
    });
    scroller.on();

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

    //Resize events
    $(window).resize(function() {
        $('#content-scrollable').css({
            height: ( $(window).outerHeight() - $topBar.outerHeight() )
        });
    });
});
