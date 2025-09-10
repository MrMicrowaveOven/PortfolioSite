import { aboutData } from "./data/about"

export const About = () => {
  return (
    <div>
      <h3>Full-Stack Software Engineer</h3>
      <h4>Available for Hire</h4>
      {aboutData.map((aboutText, index) =>
        <div key={index}>
          <p className="about-text">{aboutText}</p>
        </div>
      )}
    </div>
  )
}
