(function ($) {
    var $win = $(window);
    var winH = $win.height(); 
    
  $(document).on('click', '[class="button_scrollup"]', function () {
    $('body,html').animate({ scrollTop: winH }, 500);

  });
    
    $(document).on('click', '[class="cookieok"]', function () {
      console.log("clicked");
    $('[class="cookiebar"]').hide();

  });
    
     $(document).on('touchstart', '[class="cookieok"]', function () {
      console.log("clicked");
    $('[class="cookiebar"]').hide();

  });
    
    $(document).on('click', 'form', function () {
    if ($('input[type="submit"]').is(':disabled')) {
      $('[data-component-type="checkcontainer"]').addClass('required');
    }
  });

  $(document).on('change', 'input[type="checkbox"]', function (event) {
              console.log("checkbox clicked");

    $('input[type="submit"]').attr('disabled', $(this).is(':checked') ? null : 'disabled');
  });
    
    
      $(document).on('click', 'input[type="scrolltoLanding"]', function () {
          console.log("backtothelanding");
    $('body,html').stop().animate({ scrollTop: 0 }, 500);
                    console.log("backtothelanding?");


  });
    
    
    } (jQuery));