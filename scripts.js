$(document).ready(function() {

		$('.risd')
	.mouseover(function() {
		$('.maintextcontainer').css('background', 'url(gifs/risd.gif) repeat left center fixed');
		$('.maintextcontainer').css('background-size', '50%');
	})
	.mouseout(function() {
  		$('.maintextcontainer').css('background', '');
  		$('.maintextcontainer').css('background-size', '');
	});

		$('.gd')
	.mouseover(function() {
		$('.maintextcontainer').css('background', 'url(gifs/gd.gif) repeat left center fixed');
		$('.maintextcontainer').css('background-size', '10%');
	})
	.mouseout(function() {
  		$('.maintextcontainer').css('background', '');
  		$('.maintextcontainer').css('background-size', '');
	});

		$('.ctc')
	.mouseover(function() {
		$('.maintextcontainer').css('background', 'url(gifs/ctc.gif) no-repeat center center fixed');
		$('.maintextcontainer').css('background-size', 'cover');
	})
	.mouseout(function() {
  		$('.maintextcontainer').css('background', '');
  		$('.maintextcontainer').css('background-size', '');
	});

		$('.cycling')
	.mouseover(function() {
		$('.maintextcontainer').css('background', 'url(gifs/cyclingcompress.gif) repeat left center fixed');
		$('.maintextcontainer').css('background-size', '50%');
	})
	.mouseout(function() {
		$('.maintextcontainer').css('background', '');
  		$('.maintextcontainer').css('background-image', '');
	});

		$('.makingthings')
	.mouseover(function() {
		$('.maintextcontainer').css('background', 'url(gifs/knotscompress.gif) repeat center center fixed');
		$('.maintextcontainer').css('background-size', 'cover');
	})
	.mouseout(function() {
  		$('.maintextcontainer').css('background', '');
  		$('.maintextcontainer').css('background-size', '');
	});


});

$('#seemore').click(function() {
	$('html, body').animate({ scrollTop: 820 }, 600);
	return false;
});