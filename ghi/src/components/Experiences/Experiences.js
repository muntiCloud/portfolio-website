import React from 'react'
import '../../styles/main/Experiences.modules.css'
import elementor from '../../assets/images/experiences/shopify.png'
import shopify from '../../assets/images/experiences/icon.svg'
import wordpress from '../../assets/images/experiences/wordpress.png'

function Experience(){


      return (


        <>
 <div className="experience-container">
        <div className="left-flex">
        <div className="list-experience">
    <h1>Programing Language</h1>
    <p>
    <span className="icon-with-text">
      <i className="fab fa-js milestone-icon javascript-icon"></i>
      <span>JavaScript</span>
    </span>
    <span className="icon-with-text">
      <i className="fab fa-js milestone-icon jquery-icon"></i>
      <span>jQuery</span>
    </span>
    <span className="icon-with-text">
      <i className="fab fa-js milestone-icon typescript-icon"></i>
      <span>TypeScript</span>
    </span>
    <span className="icon-with-text">
      <i className="fab fa-python milestone-icon python-icon"></i>
      <span>Python</span>
    </span>

    </p>
  </div>
          <div className="list-experience">
            <h1>FrontEnd Design</h1>
            <p>
    <span className="icon-with-text">
      <i className="fab fa-react milestone-icon react-icon"></i>
      <span>React</span>
    </span>
    <span className="icon-with-text">
      <i className="fab fa-js milestone-icon js-icon"></i>
      <span>JavaScript</span>
    </span>
    <span className="icon-with-text">
      <i className="fab fa-html5 milestone-icon html5-icon"></i>
      <span>HTML 5</span>
    </span>
    <span className="icon-with-text">
      <i className="fab fa-css3 milestone-icon css3-icon"></i>
      <span>CSS3</span>
    </span>
  </p>
          </div>
          <div className="list-experience">
            <h1>Backend Development</h1>
            <p>
    <span className="icon-with-text">
      <i className="fab fa-node-js milestone-icon"></i>
      <span>Node.js</span>
    </span>
    <span className="icon-with-text">
      <i className="fab fa-python milestone-icon"></i>
      <span>Python</span>
    </span>
    <span className="icon-with-text">
      <i className="fab fa-server milestone-icon"></i>
      <span>Fastapi</span>
    </span>
    <span className="icon-with-text">
      <i className="fas fa-cogs milestone-icon django-icon"></i>
      <span>Django</span>
    </span>
    <span className="icon-with-text">
      <i className="fas fa-network-wired milestone-icon"></i>
      <span>Express</span>
    </span>
  </p>

          </div>
          <div className="list-experience">
            <h1>Database Management </h1>
            <p>
    <span className="icon-with-text">
      <i className="fas fa-database milestone-icon mysql-icon"></i>
      <span>MySQL</span>
    </span>
    <span className="icon-with-text">
      <i className="fas fa-database milestone-icon sql-server-icon"></i>
      <span>SQL Server</span>
    </span>
    <span className="icon-with-text">
      <i className="fas fa-database milestone-icon postgresql-icon"></i>
      <span>PostgreSQL</span>
    </span>
    <span className="icon-with-text">
      <i className="fas fa-database milestone-icon mongodb-icon"></i>
      <span>MongoDB</span>
    </span>
    <span className="icon-with-text">
      <i className="fas fa-database milestone-icon oracle-icon"></i>
      <span>Oracle Database</span>
    </span>
  </p>
</div>
        </div>
        <div className="right-flex">
          <div className="experience-row">
            <div className="experience-language python">
              <img className="experience-img" src={wordpress} alt='' />
            </div>
            <div className="experience-language python">
              <img className="experience-img" src={shopify} alt='' />
            </div>
            <div className="experience-language python">
              <img className="experience-img" src={elementor} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience
