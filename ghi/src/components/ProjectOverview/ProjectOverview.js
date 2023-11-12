import React, { useEffect } from 'react'
import '../../styles/main/ProjectOverview.modules.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

import ipad from '../../assets/images/ipad.png'

function ProjectOverview(){




    useEffect(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('active');
          }, (index + 1) * 1000);
        });
      }, []);
return(
<div class="project-container">
      <div  class="project-row">
    <div class="project-card">
    <img src={process.env.PUBLIC_URL + ipad} alt="project" className="ipad-image" />
      <div class="project-overlay">
        <div class="overlay-content">
          <p>Interactive screen recording or demo goes here</p>
        </div>
      </div>
    </div>
    <div class="project-card">
    <img src={process.env.PUBLIC_URL + ipad} alt="project" className="ipad-image" />
        <div class="project-overlay">
          <div class="overlay-content">
            <p>Interactive screen recording or demo goes here</p>
          </div>
        </div>
      </div>

      <div class="project-card">
      <img src={process.env.PUBLIC_URL + ipad} alt="project" className="ipad-image" />
        <div class="project-overlay">
          <div class="overlay-content">
            <p>Interactive screen recording or demo goes here</p>
          </div>
        </div>
      </div>

      <div class="project-card">
      <img src={process.env.PUBLIC_URL + ipad} alt="project" className="ipad-image" />
        <div class="project-overlay">
          <div class="overlay-content">
            <p>Interactive screen recording or demo goes here</p>
          </div>
        </div>
      </div>
    </div>


    <Link className=" project_redirect_btn nav-link active" to="projects">Visit Here</Link>
  </div>
    )
}

export default  ProjectOverview;
