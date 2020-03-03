// JavaScript Document

/************************************************************************************ PRELOADER STARTS */	

 jQuery(window).load(function() {
             $('#preloader').fadeOut('slow'); 
             
         	});
			
/************************************************************************************ PRELOADER ENDS */	

/************************************************************************************ STICKY NAVIGATION STARTS */

$(window).load(function(){
          $("#navigation").sticky({ topSpacing: 0 });
		  
        });
		
/************************************************************************************ STICKY NAVIGATION ENDS */
	
/************************************************************************************ ONEPAGE NAVIGATION STARTS */

$(document).ready(function() {
	$('.nav').onePageNav({
		filter: ':not(.external)',
		begin: function() {
		console.log('start')
		},
		end: function() {
		console.log('stop')
		}
	});

});

/************************************************************************************ ONEPAGE NAVIGATION ENDS */

/************************************************************************************ COUNTER UP STARTS */

 jQuery(document).ready(function( $ ) {
                $('.counter').counterUp({
                    delay: 30,
                    time: 1000
                });
            });

/************************************************************************************ COUNTER UP ENDS */

/************************************************************************************ PAGE ANIMATED ITEMS STARTS */

	jQuery(document).ready(function($) {
	
	'use strict';

    	$('.animated').appear(function() {
	        var elem = $(this);
	        var animation = elem.data('animation');
	        if ( !elem.hasClass('visible') ) {
	        	var animationDelay = elem.data('animation-delay');
	            if ( animationDelay ) {

	                setTimeout(function(){
	                    elem.addClass( animation + " visible" );
	                }, animationDelay);

	            } else {
	                elem.addClass( animation + " visible" );
	            }
	        }
	    });
});	

/************************************************************************************ PAGE ANIMATED ITEMS ENDS */

/************************************************************************************ PARALLAX STARTS */

$(document).ready(function(){	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('.parallax-1').parallax("50%", 0.1);
	$('.parallax-2').parallax("50%", 0.1);
	$('.parallax-3').parallax("50%", 0.4);
	$('.parallax-4').parallax("50%", 0.3);

})

/************************************************************************************ PARALLAX ENDS */

/************************************************************************************ PORTFOLIO DETAIL STARTS */

    $('.items').click(function (event) {
        event.preventDefault();

        if ($('.portfolio-detail').hasClass('open-box')) {
            $('.portfolio-detail').addClass('closed-box');
            $('.portfolio-detail').removeClass('open-box');
        }

        var fileID = $(this).attr('data-project');

        if (fileID != null) {
            $('html,body').animate({
                scrollTop: $('.portfolio-detail').offset().top - 68
            }, 500);

        }

        $.ajax({
            url: fileID
        }).success(function (data) {
            $('.portfolio-detail').addClass('open-box');
            $('.portfolio-detail').html(data);
            $('.portfolio-detail').removeClass('closed-box');

            $('.close-detail').click(function () {
                $('.portfolio-detail').addClass('closed-box');
                $('.portfolio-detail').removeClass('open-box');
                $('html,body').animate({
                    scrollTop: $('#portfolio').offset().top - 68
                }, 500);
                setTimeout(function () {
                    $('.portfolio-detail').html('');
                }, 1000);
            });
        });

    });	

/************************************************************************************ PORTFOLIO DETAIL ENDS */


/************************************************************************************ SERVICES DETAIL STARTS */

    $('.s-items').click(function (event) {
        event.preventDefault();

        if ($('.services-detail').hasClass('open-box')) {
            $('.services-detail').addClass('closed-box');
            $('.services-detail').removeClass('open-box');
        }

        var fileID = $(this).attr('data-project');

        if (fileID != null) {
            $('html,body').animate({
                scrollTop: $('#services').offset().top - 68
            }, 500);

        }

        $.ajax({
            url: fileID
        }).success(function (data) {
            $('.services-detail').addClass('open-box');
            $('.services-detail').html(data);
            $('.services-detail').removeClass('closed-box');

            $('.close-detail').click(function () {
                $('.services-detail').addClass('closed-box');
                $('.services-detail').removeClass('open-box');
                $('html,body').animate({
                    scrollTop: $('#services').offset().top - 68
                }, 500);
                setTimeout(function () {
                    $('.services-detail').html('');
                }, 1000);
            });
        });

    });	

/************************************************************************************ SERVICES DETAIL ENDS */	

/************************************************************************************ GALLERY BLOG POST STARTS */
	
$(document).ready(function() {
    				   $("#gallery-blog-post").owlCarousel({
    					  navigation : true, 
    					  slideSpeed : 400,
    					  paginationSpeed : 500,
    					  singleItem:true,
    					  pagination:false,
    					  autoPlay : 5000,
    					  navigationText : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
     					 });
    			});
		
/************************************************************************************ GALLERY BLOG POST ENDS */								

/************************************************************************************ TESTIMONIALS STARTS */	

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $(".testimonials-carousel").owlCarousel({
        autoPlay: 10000,
        slideSpeed: 200,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        autoHeight: true,
		/*navigation: true,
        navigationText: [
        "<i class='icon-chevron-left icon-white'></i>",
        "<i class='icon-chevron-right icon-white'></i>"
        ],*/
        //Call beforeInit callback, elem parameter point to $("#our-team")
        beforeInit: function (elem) {
            random(elem);
        }

    });

});

/************************************************************************************ TESTIMONIALS ENDS */	


/************************************************************************************ TO TOP STARTS */

 $(document).ready(function(){ 
         
             $(window).scroll(function(){
                 if ($(this).scrollTop() > 100) {
                     $('.scrollup').fadeIn();
                 } else {
                     $('.scrollup').fadeOut();
                 }
             }); 
         
             $('.scrollup').click(function(){
                 $("html, body").animate({ scrollTop: 0 }, 600);
                 return false;
             });
         
         });	
		 

/************************************************************************************ TO TOP ENDS */		 

/************************************************************************************ FITVID STARTS */

$(document).ready(function() {
    	$(".fitvid").fitVids();
    });
	
/************************************************************************************ FITVID ENDS */	
	
/************************************************************************************ SWITCHER CSS STARTS */ 
 
$(document).ready(function() {
"use strict";
    $("#hide, #show").click(function () {
        if ($("#show").is(":visible")) {
           
            $("#show").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            
            $("#switch").animate({
                "margin-left": "0px"
            }, 500).show();
        } else {
            $("#switch").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            $("#show").show().animate({
                "margin-left": "0"
            }, 500);
        }
    });
                      
});

/************************************************************************************ SWITCHER CSS ENDS */ 	

// Scroll to specific values
// scrollTo is the same
	window.scroll({
	  top: 2500, 
	  left: 0, 
	  behavior: 'smooth' 
	});

	// Scroll certain amounts from current position 
	window.scrollBy({ 
	  top: 100, // could be negative value
	  left: 0, 
	  behavior: 'smooth' 
	});

	// Scroll to a certain element
	document.querySelector('.hello').scrollIntoView({ 
	  behavior: 'smooth' 
	});
	