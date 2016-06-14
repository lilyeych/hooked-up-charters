// A $( document ).ready() block.
$( document ).ready(function() {
	$('#menu-icon').on('click', function(){
		$('#header-nav').toggleClass('nav-open');
	});
});
