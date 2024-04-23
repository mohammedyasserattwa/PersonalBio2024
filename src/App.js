import React, {useEffect, useRef, useState} from 'react';
import './css/App.css';
import ThreeScene from './header'; // Import the ThreeScene component
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/socialLinks';
import Nav from './components/NavBar';
import ContactForm from './components/contactForm';
import Footer from './components/footer';

const App = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('black');
  const SkillRef = useRef(null);
  const sections = [
      { id : "biography" , label: "Biography" },
      { id : "skills" , label: "Skill Set" },
      { id : "portfolio" , label: "Portfolio" },
  ]

  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [navbarVisible, setNavbarVisible] = useState(true)


  useEffect(() => {
    document.title = 'Mohammed Yasser | Personal Website';


    const handleScroll = () => {
        
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;

        // Calculate which section is currently in the viewport
        for (const section of sections) {
            const element = document.getElementById(section.id);
            
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                    setActiveSection(section.id);
                    
                    break;
                }
            }
        }

        // Hide the navigation bar when at the top or bottom
        setNavbarVisible(scrollY > 500 && scrollY < documentHeight - windowHeight - 550);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          setBackgroundColor('#15ff00');
        } else {
          setIsInViewport(false);
          setBackgroundColor('black');
        }
      });
    }
    , options);

    observer.observe(SkillRef.current);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    }
  });

  const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <div className="app-container">
      <div className="app-header">
          <div className="introduction-container">
              <h1 className="introduction-title"><span className="hello-text">Hello</span><br /> I'm <span className="highlight">Mohammed Yasser</span></h1>
              <p className="introduction-text">I'm a <span className="highlight">Software Engineer</span> based in <span className="highlight">Egypt</span> with a passion for <span className="highlight">Web Development</span>, <span className="highlight">UI/UX Design</span>, and more!</p>
              <p>Scroll to view more about me.</p>
          </div>
          <ThreeScene /> 
      </div>
      <div className={`navbar ${navbarVisible ? '' : 'hidden'}`}>
              {sections.map((section) => (
                <div
                  key={section.id + "-nav"}
                  className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {activeSection === section.id ? (
                    <div>
                      <br />
                      {section.label}
                    </div>
                  ) : (
                    section.label
                  )}
                </div>
              ))}
            </div>
      <div id="biography">
        <About  />
      </div>
      <div id="skills">
        <Skills className={`section-content ${isInViewport ? 'in-viewport' : ''}`} style={{ backgroundColor }} ref={SkillRef} />
      </div>

      <div id="portfolio">
        <Portfolio  />
      </div>
      
      <SocialLinks />

      <ContactForm />

      <Footer />
    </div>
  );
};

export default App;
