(function ($) {
    var $win = $(window);
    var winH = $win.height(); 
        console.log(winH);
    
  $(document).on('click', '[class="button_scrollup"]', function () {
      console.log("clicked");
    $('body,html').animate({ scrollTop: winH }, 500);
            console.log("animated");

  });
    
    } (jQuery));