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
import { NavMenu } from './sections/NavMenu'
import { Home } from './sections/Home'
import { About } from './sections/About'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './sections/Contact'
import { Transition } from './Transition'

const App = () => {
  return (
    <div className="App">
      <NavMenu />
      <Section name="home">
        <Home />
      </Section>
      <Transition index={1}/>
      <Section name="about" title="about me">
        <About />
      </Section>
      <Transition index={2}/>
      <Section name="skills" title="skills">
        <Skills />
      </Section>
      <Transition index={3}/>
      <Section name="projects" title="projects">
        <Projects />
      </Section>
      <Transition index={4}/>
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
          {title && <h2 className="title">{title.toUpperCase()}</h2>}
          <div className={"content " + name}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
