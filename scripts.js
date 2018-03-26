// @codekit-prepend 'jquery-3.2.1.js'
// @codekit-prepend 'jquery.color.js'
// @codekit-prepend 'jquery.easing.1.3.js'
// @codekit-prepend 'jquery.smoothState.js'

$(document).ready(function () {
  $('ul.tabs').tabs();
  swipeable: true;
  responsiveThreshold: Infinity;

});

$('.risd')
  .mouseover(function () {
    $('.maintextcontainer').css('background', 'url(gifs/risdcompress.gif) repeat left center fixed');
    $('.maintextcontainer').css('background-size', '40%');
  })
  .mouseout(function () {
    $('.maintextcontainer').css('background', '');
    $('.maintextcontainer').css('background-size', '');
  });

$('.gd')
  .mouseover(function () {
    $('.maintextcontainer').css('background', 'url(gifs/gd.gif) repeat left center fixed');
    $('.maintextcontainer').css('background-size', '10%');
  })
  .mouseout(function () {
    $('.maintextcontainer').css('background', '');
    $('.maintextcontainer').css('background-size', '');
  });

$('.ctc')
  .mouseover(function () {
    $('.maintextcontainer').css('background', 'url(gifs/ctccompress.gif) no-repeat center center fixed');
    $('.maintextcontainer').css('background-size', 'cover');
  })
  .mouseout(function () {
    $('.maintextcontainer').css('background', '');
    $('.maintextcontainer').css('background-size', '');
  });

$('.cycling')
  .mouseover(function () {
    $('.maintextcontainer').css('background', 'url(gifs/cyclingcompress.gif) repeat left center fixed');
    $('.maintextcontainer').css('background-size', '30%');
  })
  .mouseout(function () {
    $('.maintextcontainer').css('background', '');
    $('.maintextcontainer').css('background-image', '');
  });

$('.makingthings')
  .mouseover(function () {
    $('.maintextcontainer').css('background', 'url(gifs/knots.gif) repeat center center fixed');
    $('.maintextcontainer').css('background-size', 'cover');
  })
  .mouseout(function () {
    $('.maintextcontainer').css('background', '');
    $('.maintextcontainer').css('background-size', '');
  });

  $('.screens')
  .mouseover(function () {
    $('.maintextcontainer').css('background', 'url(gifs/screens.gif) repeat center center fixed');
    $('.maintextcontainer').css('background-size', 'cover');
  })
  .mouseout(function () {
    $('.maintextcontainer').css('background', '');
    $('.maintextcontainer').css('background-size', '');
  });


$('#seemore').click(function () {
  $('html, body').animate({
    scrollTop: 700
  }, 600);
  return false;
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});

$('.materialboxed').materialbox();