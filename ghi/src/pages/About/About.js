import React from 'react';
import '../../styles/pages/About.modules.css'
import shape from '../../assets/images/about/shape.png'

import art from '../../assets/images/about/art.png'

import videoSrc from '../../assets/images/about/circle.mp4'

import recShape from '../../assets/images/about/rectangle.mp4'

import WorldGlobe from './WorldMap';



function AboutMe() {


  return (
    <>
    <div className="about-container">
        <div className="image-section world-map">
            < WorldGlobe className="worldm" />
        </div>
        <div className="content-section">
            <h1 className="graphical-name">Monaliza Kuku</h1>
            <div className="bio">
            <p>
              Hello! I'm Muntaza, a passionate and dedicated full-stack developer. My journey to becoming a software engineer started in 2020 when I encountered a technical barrier while working on smart fashion.
            </p>           </div>

            <div className="bio">
            <p>
              The journey has been remarkable and exciting, working on various projects and engaging in continuous learning. I thrive on solving complex problems and creating innovative solutions.
            </p>
            </div>

            <div className="bio">
            <p>
              My inspiration comes from traveling and diverse cultures. I'm always curious and find joy in exploring different perspectives and ways of thinking.
            </p>
            </div>
        </div>
    </div>

    <div className="hobbies-container">
      <div className="hobbies-content">
        <div className="animated-video-container">
              <video className="banner-video" autoPlay muted loop>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="animated-video-container">
              <video className="banner-video" autoPlay muted loop>
                <source src={recShape} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="animated-video-container">
                <img src={shape} type='shape/png'/>
            </div>
      </div>
      <div className="hobbies-images">
        <div className="hobby-image">
          {/* Image 1 */}
          <img src={art} alt="Hobby 1" />
        </div>

        <div className="hobby-image value-card-container">

        <div className="flex-row">
    <div className="value-card card1">
      <div className="overlay"></div>
      <div className="card-content">
        <h2>Travel</h2>
        <p>Passion</p>
      </div>
    </div>
    <div className="value-card card2">
      <div className="overlay"></div>
      <div className="card-content">
        <h2>Innovation</h2>
        <p>creativity</p>
      </div>
    </div>
    <div className="value-card card3">
      <div className="overlay"></div>
      <div className="card-content">
        <h2>Mission</h2>
        <p>Passion</p>
      </div>
    </div>
  </div>

  <div className="flex-row">
    <div className="value-card card1">
      <div className="overlay"></div>
      <div className="card-content">
        <h2>Travel</h2>
        <p>Passion</p>
      </div>
    </div>
    <div className="value-card card2">
      <div className="overlay"></div>
      <div className="card-content">
        <h2>Innovation</h2>
        <p>creativity</p>
      </div>
    </div>
    <div className="value-card card3">
      <div className="overlay"></div>
      <div className="card-content">
        <h2>Mission</h2>
        <p>Passion</p>
      </div>
    </div>
  </div>
        </div>
    </div>
    </div>





    <div className="abstract-art-container">
      <div className="abstract-art">
        <div className="paint-drip"></div>
        <div className="paint-drip"></div>
        <div className="paint-drip"></div>
        <div className="paint-drip"></div>
        <div className="paint-drip"></div>
        <div className="paint-drip"></div>
        {/* Add more paint drips as needed */}
      </div>


      {/* <div className="art-content">
        <h2 className="abstract-title">Abstract Art</h2>
        <p className="abstract-description">Explore my abstract visual art...</p>
      </div> */}


    </div>

</>
);
};

export default AboutMe;
