(function ($) {
    var $win = $(window);
    var winH = $win.height(); 
        console.log(winH);
    
  $(document).on('click', '[class="button_scrollup"]', function () {
    $('body,html').animate({ scrollTop: winH }, 500);

  });
    
    $(document).on('click', '[class="cookieok"]', function () {
      console.log("clicked");
    $('[class="cookiebar"]').hide();

  });
    
    } (jQuery));