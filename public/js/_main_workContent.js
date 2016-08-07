var createAccordions = function(){
      
      $(".accordion").each(function(index, accordion){
        
        var openElement;

        $(accordion).children("a").on("click", function(){
          console.log ("accordion");
          // 1)
          // var accordion = $(this).parent();
          // accordion.children("p").slideUp();
        
          // 2)
          // $(this).siblings("p").slideUp();
        
          // this will conflict if there are multiple on the page
          // $(".accordion p").slideUp();
      
          if (openElement) {
            openElement.slideUp();          
          }

          openElement = $(this).next();
          openElement.slideDown();

        });
        
      });
      
      
    }
    
    createAccordions();
    
      

//Make an ajax request -- load in information about each project to help with the intial loading time
$(".work_section #graphic_work .works").on("click", function(event){
  event.preventDefault();
  var openElement;
  var $this = $(this);
  // Changing the look of the tabs
  //$this.siblings().removeClass("current");
  $(".work-content-container").remove();

  //$this.addClass("current");
  $this.after( "<div class='work-content-container'></div>" );
  if (openElement) {
            openElement.slideUp();          
          }

          openElement = $(this).next();
          openElement.slideDown();

  var workToShowSelector = $this.attr("href");
  console.log(workToShowSelector);
  

 
  var $workContentToShow = $(workToShowSelector);
  // Changing which content is shown
  $workContentToShow.siblings().hide();
  
  $workContentToShow.show();
    var makeAjaxRequest = function(){
    
    $.ajax({
      url: workToShowSelector
    }).done(function(data){

      console.dir(data);
      
      $(".work-content-container").html(data);
    });
  }

  makeAjaxRequest();
  
});  

 

  