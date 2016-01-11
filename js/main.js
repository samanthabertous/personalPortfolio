//global variables for nav bar
$nav = $(".mainheader");
$navImage = $(".mainheader #header-wrapper .header-logo a img");
$sections = $("section");
$navLinks = $("#header-wrapper #primary-menu ul li a");
var mainNavHeight = $("#header-wrapper")[0].getBoundingClientRect().height;
var sectionPositions = [];

//define the height of each section
$sections.each(function(index, element){
  
  var elementTop = $(this).offset().top-mainNavHeight;
  var elementBottom = elementTop +this.getBoundingClientRect().height;

  sectionPositions.push({
    top: elementTop,
    bottom: elementBottom
  });
});



//when user scrolls down nav bar animates smaller and a sticky white background
$(document).on("scroll", function(){                 
  var scrollTop = $(document).scrollTop();
    if (scrollTop > 10) {
      $navImage.addClass("smaller_nav_logo");
      $nav.addClass("smaller_nav");
    } else {
      $navImage.removeClass("smaller_nav_logo");
      $nav.removeClass("smaller_nav");
    }

// highlight nav components when user gets to each content section
  if ($(window).height() + scrollTop === $(document).height()){
    $navLinks.removeClass("current");
    $navLinks.last().addClass("current");  
  } else {
    $navLinks.removeClass("current");       
    $sections.each(function(index, element){                   
      if ( scrollTop > sectionPositions[index].top && scrollTop < (sectionPositions[index].bottom-1)) {
        $navLinks.eq(index).addClass("current");          
      }
    });
  }
          
});




