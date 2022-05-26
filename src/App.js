import { useRef } from "react"
import './css/about.css'
import './css/App.css';
import './css/backgrounds.css';
import './css/home.css'
import './css/navMenu.css'
import './css/project.css'
import './css/skills.css'
import './css/zMobile.css'
import { About } from './About'
import { Skills } from './Skills'
import { Projects } from './Projects'
import Resume from "./data/Resume-BenjaminZagorski.pdf"
import Photo from "./photo.jpg"

const App = () => {
  const homeElement = useRef(null)
  const aboutElement = useRef(null)
  const skillsElement = useRef(null)
  const portfolioElement = useRef(null)
  const contactElement = useRef(null)

  const navigate = section => {
    const elementToScrollTo = {
      home: homeElement,
      about: aboutElement,
      skills: skillsElement,
      portfolio: portfolioElement,
      contact: contactElement
    }[section]
    const topOfElement = elementToScrollTo.current.getBoundingClientRect().top
    window.scroll({top: topOfElement, behavior: "smooth"})
  }

  const navMenu = () => {
    return (
      <div className="nav-menu">
        {["home", "about", "skills", "portfolio", "contact"].map((sectionName, index) =>
          <div className="nav-menu-block" key={index} onClick={() => navigate(sectionName)}>
            <div className="nav-menu-text">
              {sectionName.toUpperCase()}
            </div>
          </div>
        )}
      </div>
    )
  }
  return (
    <div className="App">
      {navMenu()}
      <div className="wide-section home-wide-section">
        <div className="section home">
          <div className="home-info">
            <h1 className="name-text">Benjamin Zagorski</h1>
            <h1 className="job-title-text">Full-Stack Software Engineer</h1>
            <div className="banner-buttons">
              <Button link={Resume} text="Download my Resume" />
              <Button link="https://github.com/MrMicrowaveOven" text="Check out my Github" />
            </div>
          </div>
          <div className="photo-section">
            <img src={Photo} className="photo"/>
          </div>
        </div>
      </div>
      <div ref={aboutElement} className="wide-section about-wide-section">
        <Section name="about" title="about me">
          <About />
        </Section>
      </div>
      <div ref={skillsElement} className="wide-section skills-wide-section">
        <Section name="skills" title="skills">
          <Skills/>
        </Section>
      </div>
      <div ref={portfolioElement} className="wide-section portfolio-wide-section">
        <Section name="portfolio" title="portfolio">
          <Projects />
        </Section>
      </div>
      <div ref={contactElement} className="wide-section contact-wide-section">
        <Section name="contact" title="contact me">

        </Section>
      </div>
    </div>
  );
}

const Section = ({children, name, title}) => {
  return (
    <div className={"section-wrapper " + name + "-section-wrapper"}>
      <div className={"section " + name}>
        <h2 className="title">{title?.toUpperCase()}</h2>
        <div className={"content " + name}>
          {children}
        </div>
      </div>
    </div>
  )
}

const Button = ({link, text}) => {
  return (
    <div className="banner-button">
      <a href={link} target="_blank" download="Resume-BenjaminZagorski" className="banner-button-link">
        <p className="banner-button-text">
          {text}
        </p>
      </a>
    </div>
  )
}

export default App;
