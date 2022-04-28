import { useRef } from "react"
import './css/App.css';
import './css/backgrounds.css';
import { Skills } from './Skills'
import { Projects } from './Projects'


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
      <div className="section home">
        <h1 className="name-text">Benjamin Zagorski</h1>
        <h2 className="job-title-text">Full-Stack Software Engineer</h2>
        <a>Download my Resume</a>
        <a>Check out my Github</a>
      </div>
      <div ref={aboutElement}>
        <Section name="about me">
          <h3>Full-Stack Software Engineer</h3>
          <h4>Available for Hire</h4>
          <br/>
          <p>I'm Benjamin, an energetic web developer with over 4 years experience in Ruby on Rails and React.  I come from a background in mathematics, education, and probability.</p>
          <br/>
          <p>I love coding, so I have a lot of personal projects (see below).  I turn every project and assignment into an opportunity to learn.  I am a big fan of playing around with different libraries to learn the ins and outs of them.  I enjoy writing tests, building interfaces, and everything about favicons.</p>
          <br/>
          <p>Outside of software, I love swimming in the summer and skiing in the winter.  Beach bonfires, dinner parties, and jacuzzis are my favorite things about existing.</p>
        </Section>
      </div>
      <div ref={skillsElement}>
        <Section name="skills">
          <Skills/>
        </Section>
      </div>
      <div ref={portfolioElement}>
        <Section name="portfolio">
          <Projects />
        </Section>
      </div>
      <div ref={contactElement}>
        <Section name="contact">

        </Section>
      </div>
    </div>
  );
}

const Section = ({children, name}) => {
  return (
    <div className={"section " + name}>
      <h2 className="title">{name.toUpperCase()}</h2>
      <div className={"content " + name}>
        {children}
      </div>
    </div>
  )
}

export default App;
