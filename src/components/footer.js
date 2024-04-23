import React from 'react';
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faGithub, faFacebook, faGoogle  } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <p>I'm a Software Engineer based in Egypt with a passion for Web Development, UI/UX Design, and more!</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: mohammedyasserattwa@gmail.com</li>
            <li>Phone: +20 1125646805</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mohammed Yasser. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;