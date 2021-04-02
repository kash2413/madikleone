jQuery(function($){

    // Loader

    //$(window).load(function(){ jQuery(".loader-container").fadeOut("200"); });  

    // Menu

    $('#toggle-menu').click(function() {
        $('.menu-mobile').addClass('is-open');
    });

    $('#close-menu').click(function() {
        $('.menu-mobile').removeClass('is-open');
    });


});
