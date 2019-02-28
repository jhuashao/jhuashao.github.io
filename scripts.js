// Tabs animation
$(document).ready(function () {
  $("ul.tabs").tabs();

});

// Hero gif animation
$(".risd")
  .mouseover(function () {
    $(".maintextcontainer").css(
      "background",
      "url(gifs/risdcompress.gif) repeat left center fixed"
    );
    $(".maintextcontainer").css("background-size", "40%");
  })
  .mouseout(function () {
    $(".maintextcontainer").css("background", "");
    $(".maintextcontainer").css("background-size", "");
  });

$(".gd")
  .mouseover(function () {
    $(".maintextcontainer").css(
      "background",
      "url(gifs/gd.gif) repeat left center fixed"
    );
    $(".maintextcontainer").css("background-size", "10%");
  })
  .mouseout(function () {
    $(".maintextcontainer").css("background", "");
    $(".maintextcontainer").css("background-size", "");
  });

$(".ctc")
  .mouseover(function () {
    $(".maintextcontainer").css(
      "background",
      "url(gifs/ctccompress.gif) no-repeat center center fixed"
    );
    $(".maintextcontainer").css("background-size", "cover");
  })
  .mouseout(function () {
    $(".maintextcontainer").css("background", "");
    $(".maintextcontainer").css("background-size", "");
  });

$(".cycling")
  .mouseover(function () {
    $(".maintextcontainer").css(
      "background",
      "url(gifs/cyclingcompress.gif) repeat left center fixed"
    );
    $(".maintextcontainer").css("background-size", "30%");
  })
  .mouseout(function () {
    $(".maintextcontainer").css("background", "");
    $(".maintextcontainer").css("background-image", "");
  });

$(".makingthings")
  .mouseover(function () {
    $(".maintextcontainer").css(
      "background",
      "url(gifs/knots.gif) repeat center center fixed"
    );
    $(".maintextcontainer").css("background-size", "cover");
  })
  .mouseout(function () {
    $(".maintextcontainer").css("background", "");
    $(".maintextcontainer").css("background-size", "");
  });

$(".screens")
  .mouseover(function () {
    $(".maintextcontainer").css(
      "background",
      "url(gifs/screens.gif) repeat center center fixed"
    );
    $(".maintextcontainer").css("background-size", "cover");
  })
  .mouseout(function () {
    $(".maintextcontainer").css("background", "");
    $(".maintextcontainer").css("background-size", "");
  });

$(".github")
  .mouseover(function () {
    $(".maintextcontainer").css(
      "background",
      "url(gifs/github.gif) repeat center center fixed"
    );
    $(".maintextcontainer").css("background-size", "cover");
  })
  .mouseout(function () {
    $(".maintextcontainer").css("background", "");
    $(".maintextcontainer").css("background-size", "");
  });

$(".primer")
  .mouseover(function () {
    $(".maintextcontainer").css(
      "background",
      "url(gifs/primer.gif) repeat left center fixed"
    );
    $(".maintextcontainer").css("background-size", "cover");
  })
  .mouseout(function () {
    $(".maintextcontainer").css("background", "");
    $(".maintextcontainer").css("background-size", "");
  });

// material lightbox
$(".materialboxed").materialbox();

var windowWidth = $(window).width();

// hover functionality
$(".showcase-image").hover(
  function (event) {
    console.log("hovered!");
    $(this).css({
      opacity: "0.2"
    });

    if (windowWidth > 640) {
      $(this).mousemove(function (event) {
        var x = event.pageX;
        var y = event.pageY;

        $(".showcase-caption-hover").css({
          opacity: "1",
          left: x + 20,
          right: "auto",
          top: y - 7,
          bottom: "auto"
        });
        var name = $(this)
          .find(".showcase-caption")
          .html();
        $(".showcase-title-hover").html(name);
      });
    }
  },
  function () {
    if (windowWidth > 640) {
      $(".showcase-image").css({
        opacity: "1"
      });

      $(".showcase-caption-hover").css({
        opacity: "0"
      });
    }
  }
);
