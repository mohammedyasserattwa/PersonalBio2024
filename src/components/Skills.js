import React, {forwardRef} from "react"
import '../css/Skills.css'
import SkillCard from '../sub-components/SkillCard'

const Skills = forwardRef((props, ref) => {
    const skills = [
        {
          icon: '🌐',
          header: 'Web Development',
          description: <p>Creating <span className="strong">web applications</span> using HTML, CSS, and JavaScript.</p>,
          language: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODEJS', 'EXPRESS', 'MONGODB', 'SQL'],
        },
        {
          icon: '📱',
          header: 'Mobile Development',
          description: <p>Building <span className="strong">cross-platform mobile apps</span> with Flutter and Dart.</p>,
          language: ['FLUTTER', 'DART'],
        },
        {
          icon: '🤖',
          header: 'Machine Learning',
          description: <p>Training <span className="strong">machine learning models</span> using Python.</p>,
          language: ['PYTHON', 'SEABORN', 'SKLEARN', 'TENSORFLOW', 'KERAS'],
        },
        {
          icon: '📊',
          header: 'Data Science',
          description: <p><span className="strong">Analyzing and visualizing</span> data using Python.</p>,
          language: ['PYTHON', 'PANDAS', 'NUMPY', 'MATPLOTLIB', 'SEABORN'],
        },
        {
          icon: '🧪',
          header: 'Software Testing',
          description: <p>Ensuring <span className="strong">software quality</span> with automated testing.</p>,
          language: ['JAVA'],
        },
        {
          icon: '☁️',
          header: 'Cloud Computing',
          description: <p><span className="strong">Deploying and managing</span> cloud services.</p>,
          language: ['AWS', 'AZURE', 'GCF'],
        },
      ]
    return (
        <div ref={ref} className={props.className}>
            <h1>My Skill Set</h1>
            <div className="skills-container">
            {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} header={skill.header} description={skill.description} language={skill.language} />
            ))}
        </div>
        </div>
    )
})

export default Skills