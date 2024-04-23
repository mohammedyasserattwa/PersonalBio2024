import React, {useState, useRef, createRef} from "react"

import "../css/Portfolio.css"
import cardFlip from "../assets/card-flip.png"
import sceneAlert from "../assets/dash2.png"
import myReads from "../assets/myreads.png"
import weatherApp from "../assets/weather-app.png"
import timRawHoney from "../assets/timrawhoney.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faPython, faJs, faPhp, faDev } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import { faMobile, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState('All'); // Initialize with the default language

    const programming = [
        { text: 'All', icon: faDev },
        { text: 'HTML/CSS', icon: faHtml5 },
        { text: 'Python', icon: faPython },
        { text: 'Flutter/Dart', icon: faMobile },
        { text: 'PHP', icon: faPhp },
        { text: 'JavaScript', icon: faJs },
    ];

    const repositories = [
        {
            title: "CardFlip",
            repoLink: "https://github.com/mohammedyasserattwa/cardflip",
            deployedVersion: "https://play.google.com/store/apps/details?id=com.CardFlip&pli=1",
            description: "CardFlip aims to simplify the learning and memorization of theoretical concepts through a flashcard-based platform, allowing users to create, share, study, and compete with peers while offering administrative functionalities for user and content management.",
            languages: ["Flutter/Dart"],
            teamProject: true,
            image: (<img src={cardFlip} alt="cardflip" />)
        },
        {
            title: "SceneAlert",
            repoLink: "https://github.com/LaraGhoniem/MassMediaBrandListener",
            description: "SceneAlert's goal is to facilitate the process of staying up to date with the latest mentions of companies by allowing clients to enter keywords of what they want to monitor and select the media platforms they want to search.",
            languages: ["Python", "HTML/CSS", "JavaScript"],
            image: (<img src={sceneAlert} alt="SceneAlert" />),
            teamProject: true,
        },
        {
            title: 'MyReads',
            repoLink: "https://github.com/mohammedyasserattwa/MyReads",
            description: "MyReads is a website that can help users to search a specific book and give a specific book a status.",
            languages: ["HTML/CSS", "JavaScript"],
            image: (<img src={myReads} alt="MyReads" />),
            teamProject: false,
        },
        {
            title: 'Weather Application',
            repoLink: "https://github.com/mohammedyasserattwa/WeatherApplication",
            description: "Web Application based on Node JS used to view the temperature depending on the location that can be given in 3 ways: zip code, city name, or automatically detect your location.",
            languages: ["HTML/CSS", "JavaScript"],
            image: (<img src={weatherApp} alt="WeatherApp" />),
            teamProject: false,
        },
        {
            title: 'TimsRawHoney',
            repoLink: 'https://github.com/mohammedyasserattwa/TimsRawHoney',
            description: "A web application for Tim Raw Honey seeks to streamline operations, enabling online orders, user-friendly management, and improved productivity through an agile development process.",
            languages: ["HTML/CSS", "JavaScript", "PHP"],
            image: (<img src={timRawHoney} alt="TimRawHoney" />),
            teamProject: true,
        },
        {
            title: 'HamSpamDetection',
            repoLink: 'https://github.com/mohammedyasserattwa/MachineLearningProject',
            description: 'A simple notebook that provide several machine learning models that predict if a given text is ham or spam.',
            languages: ["Python"],
            image: (<img src="https://th.bing.com/th/id/R.13e8ebca307d02e996f676ecaabdffb2?rik=lhJX2duswT2BTw&riu=http%3a%2f%2fcytoscape.org%2fimages%2flogo%2fjupyter-logo.svg&ehk=EOKqaZnHr9b%2bWxjfS7FxQ7JtQX0OQO8x2G33g7nGLto%3d&risl=&pid=ImgRaw&r=0" alt="blog" />),
            teamProject: true
        },
        {
            title: "Human Action Detection",
            repoLink: "https://github.com/mohammedyasserattwa/HumanActionDetection",
            description: 'A simple notebook that predict the actions done by human using some image processing techniques',
            languages: ['Python'],
            image: (<img src="https://th.bing.com/th/id/R.13e8ebca307d02e996f676ecaabdffb2?rik=lhJX2duswT2BTw&riu=http%3a%2f%2fcytoscape.org%2fimages%2flogo%2fjupyter-logo.svg&ehk=EOKqaZnHr9b%2bWxjfS7FxQ7JtQX0OQO8x2G33g7nGLto%3d&risl=&pid=ImgRaw&r=0" alt="blog" />),
            teamProject: true
        },
        {
            title: "Understanding Egypt Coding",
            repoLink: "https://github.com/mohammedyasserattwa/data-scientiest-nanodegree-project-1",
            mediumLink: "https://medium.com/@mohammedyasserattwa/understanding-egypts-coding-landscape-the-top-programming-languages-7353c67a9417",
            description: "Explore Programming Language Transitions! Analyze Egypt's dev preferences in worked and desired languages.",
            image: (<img src="https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png" alt="blog" />), 
            languages: ["Python"],
            teamProject: false,
        }
    ]

    const [filteredRepos, setRepos] = useState(repositories)
    const [enlargedRepo, setEnlargedRepo] = useState(null)
    const repoCardRefs = filteredRepos.map(() => createRef(null));

    const scrollToRepoCard = (index) => {
        if (repoCardRefs[index] && repoCardRefs[index].current) {
            repoCardRefs[index].current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
        // filter the repositories array
        //reset the enlarged repo
        setEnlargedRepo(null)
        if(language==="All"){
            setRepos(repositories)
            return
        }
        const filteredRepos = repositories.filter((repo) => repo.languages.includes(language))

        setRepos(filteredRepos)

    };

    const previewRepo = (repo,index) => {
        if(index === enlargedRepo){
            setEnlargedRepo(null)
            return
        }
        const filteredRepos_new = filteredRepos.filter((old_repo) => !(repo.title === old_repo.title))
        setRepos([repo,...filteredRepos_new])
        setEnlargedRepo(0)
        
    }

    return (
        <div className="portfolio-section">
            <h1>My Portfolio</h1>
            <div className="filters-container">
                {programming.map((item, index) => (
                <button
                    key={index}
                    className={`filter-button ${selectedLanguage === item.text ? 'selected' : ''}`}
                    onClick={() => handleLanguageClick(item.text)}
                >
                    <FontAwesomeIcon icon={item.icon} className="icon" />
                    <br/>
                    {item.text}
                </button>
                ))}
            </div>
            <div className="repositories">
                {
                    filteredRepos.map((repo, index) => (
                        <div className={(enlargedRepo === index ? "enlarged-card":"repo-card")} 
                        key={index} 
                        ref={repoCardRefs[index]}
                        onClick={() => {
                            previewRepo(repo,index)
                            scrollToRepoCard(0)
                            }}>
                            <div className="header-row">
                                <h4>{repo.title}</h4>
                               
                            </div>
                            
                            {repo.image}
                            <h6>{repo.teamProject?"Team-made project":"Self-made project"}</h6>
                            <p>{
                                repo.description.length > 100 && enlargedRepo !== index ?
                                `${repo.description.substring(0, 100)}...` :
                                repo.description
                                }</p>
                            {enlargedRepo === index ? <a href={repo.repoLink}>View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="header-icon" /></a> : null}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Portfolio;