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
  const navigate = section => {
    const elementId = section + '-element'
    const element = document.getElementById(elementId)
    const offSet = 41
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offSet

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
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
      <Section name="home">
        <Home />
      </Section>
      <Section name="about" title="about me">
        <About />
      </Section>
      <Section name="skills" title="skills">
        <Skills />
      </Section>
      <Section name="projects" title="projects">
        <Projects />
      </Section>
      <Section name="contact" title="contact me">
        <Contact />
      </Section>
    </div>
  );
}

const Section = ({children, name, title}) => {
  return (
    <div id={name + "-element"} className={"wide-section " + name + "-wide-section"}>
      <div className={"section-wrapper " + name + "-section-wrapper"}>
        <div className={"section " + name}>
          <h2 className="title">{title?.toUpperCase()}</h2>
          <div className={"content " + name}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
