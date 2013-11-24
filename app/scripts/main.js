$(document).ready(function() {
    $(document).foundation();

    $(document).offcanvas({
        'onOpen': function(){
            console.log('Opening');
        },
        'onOpened': function(){
            console.log('Opened');
        },
        'onClose': function(){
            console.log('Closing');
        },
        'onClosed': function(){
            console.log('Closed');
        }
    });
});
