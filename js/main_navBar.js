//global variables for nav bar
$nav = $('.mainheader');
$navBar = $('#header-wrapper');
$navImage = $('.mainheader #header-wrapper h1 a');
$sections = $('section');
$navLinks = $('#header-wrapper #primary-menu ul li a');
var $mainNavHeight = ($navBar[0].getBoundingClientRect().height);



var sectionPositions = [];
//add this to nav if/else document height is greater then top content height to fight the highlighting to fast issue

//define the height of each section
$sections.each(function(index, element){
  
  var elementTop = $(this).offset().top-$mainNavHeight;
  var elementBottom = elementTop +this.getBoundingClientRect().height;

  sectionPositions.push({
    top: elementTop,
    bottom: elementBottom
  });
});

var position, direction, previous; 

/*----------SCROLL FUNCTIONS---------------*/
/*----------SCROLL FUNCTIONS---------------*/

$(document).on("scroll", function(){                 
  var scrollTop = $(document).scrollTop();
  //nav bar animates smaller w/ white except on moblie
  //hide and show "about me"
    
      if (scrollTop < 10) {
        if($(window).innerWidth() > 520){
          $navImage.removeClass('smaller_nav_logo');
          $nav.removeClass('smaller_nav');
        }
        $('#about_content .skew h2').removeClass("aboutME");
       
      } else {
        if($(window).innerWidth() > 520){
          $navImage.addClass('smaller_nav_logo');
          $nav.addClass('smaller_nav');
        }
        $('#about_content .skew h2').addClass("aboutME");
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
//Hide and Show Menu toggle bar on scroll
  if ( $(this).scrollTop() <= position ){
    direction = 'up';
    if ( direction !== previous ){
      $('#primary-menu').removeClass('hide');

      previous = direction;
    }
  } else {
    direction = 'down'
    if ( direction !== previous ){
      $('#primary-menu').addClass('hide');

      previous = direction;
    }
  }
  position = $(this).scrollTop();
          
});










