//@prepros-prepend jquery-3.0.0.min.js

$(window).on('resize',mobileNav);
$(document).ready(mobileNav);

function mobileNav() {
    if ($(window).width() <= 1000) {
		$('#nav-icon').on('click', function(){
			$('#header-nav').toggleClass('nav-open');
		});
	}
}

$(window).on('resize',teaserHeight);
$(document).ready(teaserHeight);

function teaserHeight() {
    if ($(window).width() >= 768) {

		var teaserHeight = ($(".teaser-img").outerHeight(true));
		$('.teaser-text-container').css("height",teaserHeight);
	}
}
