

<?php

require('header.php');

?>
  <section class="about_section layout_padding">
    <div class="container  ">
      <div class="heading_container heading_center">
        <h2>
          About <span>Us</span>
        </h2>
        <p>
          Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
        </p>
      </div>
      <div class="row">
        <div class="col-md-6 ">
          <div class="img-box">
            <img src="images/about-img.png" alt="">
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box d-flex justify-content-center">
            <h3>
              We Are Finexo
            </h3>
         
         

          </div>
          <div class="detail-box d-flex justify-content-center  "> 

            <button  onclick="start()" class="px-5 mx-2">
              on
            </button>
            
            <button  onclick="stop()" class="px-5 mx-2 bg-danger">
              off
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
<?php

require('footer.php');

?>
