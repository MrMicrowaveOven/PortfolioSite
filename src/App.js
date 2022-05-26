import { useRef } from "react"
import './css/App.css';
import './css/backgrounds.css';
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
      <div className="section home">
        <div className="home-info">
          <h1 className="name-text">Benjamin Zagorski</h1>
          <h2 className="job-title-text">Full-Stack Software Engineer</h2>
          <div className="banner-buttons">
            <Button link={Resume} text="Download my Resume" />
            <Button link="https://github.com/MrMicrowaveOven" text="Check out my Github" />
          </div>
        </div>
        <div className="photo-section">
          <img src={Photo} className="photo"/>
        </div>
      </div>
      <div className="section-wrapper" ref={aboutElement}>
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
      <div ref={portfolioElement} className="section-wrapper">
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
