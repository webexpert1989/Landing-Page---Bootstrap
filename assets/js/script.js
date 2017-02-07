/*******************************
 *
 * Created: 01/14/2017
 *
 *******************************/


(function($){
	"use strict";

	// document ready
	$(document).ready(function(){
		
        $("a.page-scroll").click(function(e){
            var $anchor = $(this);
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr("href")).offset().top
            }, 1500, "easeInOutExpo");

            e.preventDefault();
        });

        // accordion
        $("#accordion .panel-heading a").click(function(){
            $("#accordion .panel-heading").removeClass("active");
            
            if(!$(this).parents(".panel-heading").next(".panel-collapse").hasClass("in")){
                $(this).parents(".panel-heading").addClass("active");
            }
        });
	});

//////////////////////
})(jQuery);