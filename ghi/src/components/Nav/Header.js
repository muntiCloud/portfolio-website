import React, {useState} from 'react'
import '../../styles/components/Nav.modules.css'

import logo from '../../assets/images/logo.png'

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
    <div className="logo">
      <img src={logo} className="logo-img" alt="my-logo" />
    </div>
    <button className="hamburger" onClick={toggleNav}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
    <nav className={isNavVisible ? 'show-nav' : ''}>
      <ul>
        <li className="nav_list">
          <a href="/" className="nav_link" onClick={() => scrollTo('home')}>
            Home
          </a>
        </li>
        <li className="nav_list">
          <a href="/about" className="nav_link" onClick={() => scrollTo('about')}>
            About
          </a>
        </li>
        <li className="nav_list">
          <a href="/experience" className="nav_link" onClick={() => scrollTo('experience')}>
            Experience
          </a>
        </li>
        <li className="nav_list">
          <a href="/projects" className="nav_link" onClick={() => scrollTo('projects')}>
            Projects
          </a>
        </li>
        <li className="nav_list">
          <a href="/contact" className="nav_link" onClick={() => scrollTo('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>

  );
}

export default Header;
