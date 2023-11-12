import React, {useState, useEffect} from 'react'
import '../../styles/main/Banner.modules.css'
import flower from '../../assets/images/banner/flower.mp4'
import rec3d from '../../assets/images/banner/rec3d.mp4'

function Banner() {

  const [text, setText] = useState('');
  const initialText = "I am a software engineer, with the ability to bring ideas to reality.";
  const speed = 50;

  useEffect(() => {
    const typeText = () => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= initialText.length) {
          setText(initialText.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    };
    typeText();
  }, []);



    return(
        <>
        <div className="main-banner-container">
        <video className="flower-vid" autoPlay muted loop>
                <source src={rec3d} type="video/mp4" />
        </video>

        <div className="main-banner-content">
          <div className="main-intro-text">
            <h1 className="main-banner-header-text">
             Hello! This is Muntaza
            </h1>

            <div className="main-text-container">
              <p className="main-text-paragraph">{text}</p>
              <span className="cursor-blink">|</span>
            </div>
            <video className="flower-vid" autoPlay muted loop>
                <source src={flower} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
        </div>

        <div className="main-banner-visual">
        <video className="flower-vid" autoPlay muted loop>
                <source src={rec3d} type="video/mp4" />
              </video>
          <img className="banner-video" src="https://lonelyphotons877861708.files.wordpress.com/2021/08/guide-to-buy-telescope-cover-3.jpg" alt="munti"/>
        </div>
      </div>
        </>
    )
}

export default Banner
