import React, { useState, useRef } from 'react';
import '../../styles/main/Contacts.modules.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

function Contact(){
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useRef();

  const handleSubmit = (e) => {

    e.preventDefault();
            emailjs.sendForm('service_v56581a', 'template_67ki3dq', form.current, '9XoobcKPGIB_dS-TV')
              .then((result) => {
                  console.log(result.text);
                  form.current.reset();
                  setIsSuccess(true)

                  setTimeout(() => {
                    setIsSuccess(false);
                  }, 5000);


              }, (error) => {
                  console.log(error.text);
              });
  };



    return(
 <section class="contact-section">
        <div class="computer-container">
            <div class="computer-screen">
            <form ref={form} onSubmit={handleSubmit} class="contact-form">
              <h2>Contact Me</h2>
              <input type="text" placeholder="Your Name" required name="name" />
              <input type="email" placeholder="Your Email" required name="email" />
              <textarea placeholder="Your Message" required name="message"></textarea>
              <button className='form_btn' type="submit">Send Message</button>
            </form>

            {isSuccess && (
              <p className="success-message">Successfully sent!</p>

            )}
            <div class="computer-stand"></div>
             <div className="social-media">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className='social_icon linkedin'/>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub}  className='social_icon github' />
              </a>
            </div>
          </div>
          </div>
      </section>

    )
}

export default Contact
