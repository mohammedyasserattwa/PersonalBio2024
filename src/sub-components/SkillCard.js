import React, {useState} from 'react'
import '../css/SkillCard.css'


const SkillCard = (props) => {
    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <div className={`skill-card ${hovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="skill-icon">{props.icon}</div>
            <h3 className="skill-header">{props.header}</h3>
            <p className="skill-description">{props.description}</p>
            <div className = "skill-languages">
                {props.language.map((language, index) => (
                    <span key={index} className="skill-language">{language}</span>
                ))}

            </div>
        </div>
    )
}

export default SkillCard