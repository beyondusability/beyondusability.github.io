// START DOCUMENT
$(document).foundation();



// ACHOR LINK
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')

		|| location.hostname == this.hostname) {
			var target = $(this.hash);

			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top -58
				}, 1800);

				return false;
			}
		}
	});
});



// SIMPLE PARALLAX EFFECT
$(function() {
	$('.portfolio').hover(
		function () {
			$(this).find('.label').stop().animate({bottom: 0}, 300, 'easeOutQuad');
			$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
		},
		function () {
			$(this).find('.label').stop().animate({bottom: -60}, 200, 'easeInQuad');
			$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
		}		
	);	
});



// NICE SCROLL        
$('html').niceScroll({
	cursorcolor: '#5f717f',
	cursorborder: '1px solid #5f717f',
	cursoropacitymin: '1',
	scrollspeed: '120',
	zindex: '9'
});

// CONTACT FORM SUCCESS
if (window.location.href.substring(window.location.href.length - 16) == '?contact=success') {
    $('#Modal-Contact').foundation('reveal', 'open');
}