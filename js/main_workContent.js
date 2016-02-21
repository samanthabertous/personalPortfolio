

$(".work_section #front_work .works").on("click", function(event){
  event.preventDefault();
  var $this = $(this);
  // Changing the look of the tabs
  $this.siblings().removeClass("current");
  $this.addClass("current");
  
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

  