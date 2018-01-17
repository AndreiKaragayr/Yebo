$('.twits-slaider').slick({
 dots: true,
 arrows:false,
 speed: 300,
 autoplay: true,
 autoplaySpeed: 3000,
 slidesToShow: 1,
 adaptiveHeight: true
});

$(document).ready(function(){
   		var touch = $('.drop-menu');
   		var menu = $('.nav-wrapp');
   	$(touch).on('click', function(e) {
       	e.preventDefault();
       	menu.slideToggle(400);
   	});
   	$(window).resize(function(){
       	var wid = $(window).width();
       	if(wid > 767 && menu.is(':hidden')) {
           menu.removeAttr('style');
       	}
   	});
});
