import React from 'react'
import '../css/About.css'
import personalPhoto from '../assets/personal-photo.png'
import cv from '../assets/cv.pdf'
const About = (props) => {
    
    return (
        <div className="app-about-me">
            <h1>My Biography</h1>
            <div className="about-me-layout">
            <div>
                <div className="profile-image-container">
                    <div className="profile-image-wrapper">
                        <img src={personalPhoto} alt="Profile" className="profile-image" />
                    </div>
                </div>
            </div>
            <div>
            
            <h3>Software Engineer, Full-Stack Developer, Mobile Developer, Data Scientist, Software Tester</h3>
            <p>Welcome to my <span className="strong">journey</span>! I proudly earned my <span className="strong">Bachelor's Degree in Computer Science</span> from <span className="strong">Misr International University</span> in <span className="strong">July 2023</span>.</p>

            <p>During my university years, I delved into <span className="strong">Software Development</span>, <span className="strong">Data Science</span>, and more. From <span className="strong">Web Development</span> to <span className="strong">Machine Learning</span>, <span className="strong">Image Processing</span>, and <span className="strong">Data Structures and Algorithms</span>, I've pursued mastery.</p>

            <p>My quest for <span className="strong">knowledge</span> extends beyond the classroom. I'm committed to <span className="strong">self-improvement</span>, completing numerous courses and certifications to enhance my <span className="strong">expertise</span> in my <span className="strong">passion</span> for learning.</p>

            <div className="download-cv-container">
                <a href={cv} download="Mohammed-Yasser-CV.pdf" className="download-cv-button">
                    Download my CV 
                </a>
            </div>
            </div>
            
            </div>
            
        </div>
    )
}

export default About