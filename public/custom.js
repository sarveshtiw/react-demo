// JavaScript Document
$(document).ready(function() {
    $('button.navbar-toggler').on('click', function() {
		$('.off-canvas-sidebar').show('slide', {direction: 'left'}, 1000);
		$('.main-panel').show('slide', {direction: 'left'}, 1000);
		$('.navbar-toggler').hide();
		$('.close').show();
		$('body').addClass('nav-open');
		
		var div = '<div id="bodyClick"></div>';
		$(div).appendTo("body").click(function() {
			$('body').removeClass('nav-open');
			$('#bodyClick').remove();
			$('.navbar-toggler').show();
			$('.close').hide();
		});
	});
});