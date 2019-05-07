  $(document).ready(function() {

  /* ---------------------------------------------- /*
   * Animated scrolling / Scroll Up
  /* ---------------------------------------------- */

  $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scroll-up').fadeIn();
    } else {
      $('.scroll-up').fadeOut();
    }
  });
});

})(jQuery);
