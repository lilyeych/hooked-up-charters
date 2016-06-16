// A $( document ).ready() block.
$( document ).ready(function() {
	$('#nav-icon').on('click', function(){
		$('#header-nav').toggleClass('nav-open');
	});
});
