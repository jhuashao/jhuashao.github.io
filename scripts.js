$(document).ready(function() {

		$('.risd')
	.mouseover(function() {
		$('body').css('background', 'url(gifs/risd.gif) no-repeat center center fixed');
		$('body').css('background-size', 'cover');
	})
	.mouseout(function() {
  		$('body').css('background', '');
  		$('body').css('background-size', '');
	});

		$('.gd')
	.mouseover(function() {
		$('body').css('background', 'url(gifs/gd.gif) repeat left center fixed');
		$('body').css('background-size', '10%');
	})
	.mouseout(function() {
  		$('body').css('background', '');
  		$('body').css('background-size', '');
	});

		$('.ctc')
	.mouseover(function() {
		$('body').css('background', 'url(gifs/ctc.gif) no-repeat center center fixed');
		$('body').css('background-size', 'cover');
	})
	.mouseout(function() {
  		$('body').css('background', '');
  		$('body').css('background-size', '');
	});

		$('.cycling')
	.mouseover(function() {
		$('body').css('background', 'url(gifs/cyclingcompress.gif) repeat left center fixed');
		$('body').css('background-size', '50%');
	})
	.mouseout(function() {
		$('body').css('background', '');
  		$('body').css('background-image', '');
	});

		$('.makingthings')
	.mouseover(function() {
		$('body').css('background', 'url(gifs/knotscompress.gif) repeat center center fixed');
		$('body').css('background-size', 'cover');
	})
	.mouseout(function() {
  		$('body').css('background', '');
  		$('body').css('background-size', '');
	});
});
