<?php
$projectGallery = array(
  'rockPaperScissors' => array(
    'src' => 'projects/rock_paper_scissors/images/rock_paper_scissor_thumbnail.png',
    'href'=> 'projects/rock_paper_scissors/index_rockPaperScissors.html',
    'alt'=> 'javascript_rockPaperScissorGame',
    'name'=> 'Rock Paper Scissors'
  ),
  'slideshow' => array(
    'src'=>  'projects/Slideshow/images/test.png',
    'href'=> 'projects/Slideshow/index.html',
    'alt'=> 'javascipt_imageSlideshow',
    'name'=> 'Image Slideshow'
  ),
  'tabs'=> array(
    'src'=>  'projects/tabs/images/test.png',
    'href'=> 'projects/tabs/index.html',
    'alt'=> 'javascript_Dynamic_Tabs_with_Ajax',
    'name'=> 'Dynamic Tabs with Ajax'
  ),
  'ticTacToe'=> array(
    'src'=>  'projects/tic_tac_toe/images/test.png',
    'href'=> 'projects/tic_tac_toe/index.html',
    'alt'=> 'javascript_tic_tac_toe_game',
    'name'=> 'Tic Tac Toe'
  ),
  'toDoList'=> array(
    'src'=>  'projects/to_do_list/images/test.png',
    'href'=> 'projects/to_do_list/index.html',
    'alt'=> 'javascript_to_do_list',
    'name'=> 'To Do List'
  ),
  'velocityAnimation'=>array(
    'src'=>  'projects/velocity_animation/images/test.png',
    'href'=> 'projects/velocity_animation/grid_velocity.html',
    'alt'=> '',
    'name'=> 'Square Animations using Velocity.js library'
  ),
  'blogGallery'=> array(
    'src'=>  'projects/velocity_animation/images/test.png',
    'href'=> 'projects/',
    'alt'=> '',
    'name'=> 'Wordpress Site with Image Gallery'
  )
)
?>

<section class = "work_section">
  <a name="work" class="hidden-link">

  <h1 class="work_title1">Frontend Development</h1>
  <div id="front_work">
    
    <?php 

    foreach($projectGallery as $project){
      echo '<div class=front_image>';
     // echo '<h3>' . $project["name"] . '</h3>';
      echo '<a href='. $project['href'] .'>';
      echo '<img src=' . $project['src'] . ' alt=' . $project['alt'] . '/>';
      echo '</a>';
      echo '</div>';
    }

    ?>
     
  </div> 



  <h1 class="work_title2">Graphic Design</h1>
  <div id="graphic_work">
  

  </div>

   
        
      
      <button id= "github_button"><a href="https://github.com/samanthabertous"target="_blank">LOOK AT MY CODE</a></button>

    </section>

