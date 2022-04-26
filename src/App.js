import './css/App.css';
import './css/backgrounds.css';
import { Skills } from './Skills'

const App = () => {
  return (
    <div className="App">
      <div className="section home">
        <h1 className="name-text">Benjamin Zagorski</h1>
        <h2 className="job-title-text">Full-Stack Software Engineer</h2>
        <a>Download my Resume</a>
        <a>Check out my Github</a>
      </div>
      <Section name="about me">
        <h3>Full-Stack Software Engineer</h3>
        <h4>Available for Hire</h4>
        <p>I'm Benjamin, an energetic web developer with over 4 years experience in Ruby on Rails and React.  I come from a background in mathematics, education, and probability.</p>
        <p>I love coding, so I have a lot of personal projects (see below).  I turn every project and assignment into an opportunity to learn.  I am a big fan of playing around with different libraries to learn the ins and outs of them.  I enjoy writing tests, building interfaces, and everything about favicons.</p>
        <p>Outside of software, I love swimming in the summer and skiing in the winter.  Beach bonfires, dinner parties, and jacuzzis are my favorite things about existing.</p>
      </Section>
      <Section name="skills">
        <Skills/>
      </Section>
      <Section name="portfolio">

      </Section>
      <Section name="contact">

      </Section>
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
