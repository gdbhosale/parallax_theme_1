/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
var winHeight=0;
$(window).scroll(function() {
    //console.log(window.pageYOffset);
    if(window.pageYOffset >= winHeight) {
        console.log("Hit");
        $(".navbar-project").addClass("navbar-fixed-top");
    } else {
        $(".navbar-project").removeClass("navbar-fixed-top");
    }
    /*
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    */
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    winHeight = $(window).height();
    console.log(winHeight);
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
