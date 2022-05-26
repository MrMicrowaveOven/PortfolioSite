import { useRef } from "react"
import './css/about.css'
import './css/App.css';
import './css/backgrounds.css';
import './css/contact.css';
import './css/home.css'
import './css/navMenu.css'
import './css/project.css'
import './css/skills.css'
import './css/zMobile.css'
import { Home } from './Home'
import { About } from './About'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'

const App = () => {
  const homeElement = useRef(null)
  const aboutElement = useRef(null)
  const skillsElement = useRef(null)
  const projectsElement = useRef(null)
  const contactElement = useRef(null)

  const navigate = section => {
    const elementToScrollTo = {
      home: homeElement,
      about: aboutElement,
      skills: skillsElement,
      projects: projectsElement,
      contact: contactElement
    }[section]
    elementToScrollTo.current.scrollIntoView(
        { behavior: "smooth" }
    )
  }

  const navMenu = () => {
    return (
      <div className="nav-menu-wide">
        <div className="nav-menu">
          {["home", "about", "skills", "projects", "contact"].map((sectionName, index) =>
            <div
              className={`nav-menu-block ${index === 0 && "nav-menu-block-first"}`}
              key={index}
              onClick={() => navigate(sectionName)}
            >
              <div className="nav-menu-text">
                {sectionName.toUpperCase()}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      {navMenu()}
      <div ref={homeElement} className="wide-section home-wide-section">
        <Home />
      </div>
      <div ref={aboutElement} className="wide-section about-wide-section">
        <Section name="about" title="about me">
          <About />
        </Section>
      </div>
      <div ref={skillsElement} className="wide-section skills-wide-section">
        <Section name="skills" title="skills">
          <Skills />
        </Section>
      </div>
      <div ref={projectsElement} className="wide-section projects-wide-section">
        <Section name="projects" title="projects">
          <Projects />
        </Section>
      </div>
      <div ref={contactElement} className="wide-section contact-wide-section">
        <Section name="contact" title="contact me">
          <Contact />
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

export default App;
