import React, {useState, useEffect} from 'react'

import "../css/navbar.css"

const Nav = (props) => {
    const sections = [
        { id : "biography" , label: "Biography" },
        { id : "skills" , label: "Skill Set" },
        { id : "portfolio" , label: "Portfolio" },
    ]

    const [activeSection, setActiveSection] = useState(sections[0].id)
    const [navbarVisible, setNavbarVisible] = useState(true)

    useEffect(() => {
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
            setNavbarVisible(scrollY > 0 && scrollY < documentHeight - windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        navbarVisible ?  
            <div className="navbar">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                    {section.label}
                </div>
                ))}
            </div>
          : null        
    )
}

export default Nav