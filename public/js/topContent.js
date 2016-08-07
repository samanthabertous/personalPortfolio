$topcontent = $('.topcontent');

// .topcontent height to match to the window inner height
// whatever screen the user is on the home div will fill the screen 
$(document).ready(function() {
  var setHeight = function() {
    $windowHeight = $(window).innerHeight();
    $('.topcontent').css("min-height", $windowHeight);
    if ($windowHeight < 480) {
      $topcontent.addClass("paddingSmall");
      $topcontent.removeClass("padding")
    }else{
      $topcontent.addClass("padding");
      $topcontent.removeClass("paddingSmall");
    }
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});