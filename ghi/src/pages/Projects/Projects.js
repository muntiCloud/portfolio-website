import React from 'react';
import '../../styles/pages/Projects.modules.css'
import ipad from '../../assets/images/ipad.png'

function ProjectPage(){

return(

<main>
<div class="container marketing">



  <div class="row featurette">
    <div class="col-md-5">
      <div class="project-image">
      <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src={process.env.PUBLIC_URL + ipad}
            alt="my project"
          />      <div class="project-overlay">
      </div>
    </div>
  </div>
    <div class="col-md-7">
      <h2 class="featurette-heading fw-normal lh-1">Novel Nexus</h2>
      <p class="lead">Novel Nexus is a content creation platform for authors, that allow them to write, publish and engage with readers.</p>
    </div>
  </div>



  {/* <!-- <hr class="featurette-divider"> --> */}
  <div class="row featurette">
    <div class="col-md-5 order-md-1">
      <div class="project-image">
      <img
       className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
       src={process.env.PUBLIC_URL + ipad}  alt="placeholder"
       />

      <div class="project-overlay">
        <div class="overlay-content">
          <h3>Project 2</h3>

        </div>
      </div>
    </div>
    </div>
    <div class="col-md-7">
      <h2 class="featurette-heading fw-normal lh-1"> wojroijqR<span class="text-body-secondary"> سيذهل عقلك. </span></h2>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>
  </div>




  {/* <!-- <hr class="featurette-divider"> --> */}
  <div class="row featurette">
    <div class="col-md-5">
      <div class="project-image">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"   src={process.env.PUBLIC_URL + ipad}  alt="placeholder"/>
        <div class="project-overlay">
          <div class="overlay-content">
            <h3>Project 3</h3>

          </div>
        </div>
    </div>
  </div>
    <div class="col-md-7">
      <h2 class="featurette-heading fw-normal lh-1"> wojroijqR<span class="text-body-secondary"> سيذهل عقلك. </span></h2>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>
  </div>

  {/* <!-- <hr class="featurette-divider"> --> */}
  <div class="row featurette">
    <div class="col-md-5 order-md-1">
      <div class="project-image">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"   src={process.env.PUBLIC_URL + ipad} />
      <div class="project-overlay">
        <div class="overlay-content">
          <h3>Project 2</h3>

        </div>
      </div>
    </div>
    </div>
    <div class="col-md-7">
      <h2 class="featurette-heading fw-normal lh-1"> wojroijqR<span class="text-body-secondary"> سيذهل عقلك. </span></h2>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>
  </div>
</div>

</main>
    )
}


export default ProjectPage;
