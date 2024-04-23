import React from 'react'

import "../css/socialLinks.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faGithub, faFacebook, faGoogle  } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
    return (
        <div className="social-links">
            <h1>Reach Out</h1>
            <hr/>
            <div className="social-links-container">
                <a href="https://www.linkedin.com/in/mohammedyasserattwa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icon" /> <br></br>LinkedIn</a>
                <a href="https://github.com/mohammedyasserattwa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icon" /> <br></br>GitHub</a>
                <a href="https://www.facebook.com/mohammedyasserattwa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="icon" /> <br></br>Facebook</a>
                <a href="mailto:mohammedyasserattwa@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} className="icon" /> <br></br>Email</a>
            </div>

        </div>
    )
}

export default SocialLinks