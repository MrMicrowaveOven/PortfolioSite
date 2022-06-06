export const Home = () => {
  return (
    <div className="section home">
      <div className="home-info">
        <h1 className="name-text">Benjamin Zagorski</h1>
        <h2 className="pgp-text">(he/him)</h2>
        <h1 className="job-title-text">Full-Stack Software Engineer</h1>
        <div className="banner-buttons">
          <Button
            link="https://benjs-bucket.s3.us-west-1.amazonaws.com/Resume-BenjaminZagorski.pdf"
            text="Download my Resume"
          />
          <Button link="https://github.com/MrMicrowaveOven" text="Check out my Github" />
        </div>
      </div>
      <div className="photo-section">
        <img
          src="https://benjs-bucket.s3.us-west-1.amazonaws.com/photo-smaller.jpg"
          className="photo"
        />
      </div>
    </div>
  )
}

const Button = ({link, text}) => {
  return (
    <div className="banner-button">
      <a href={link} target="_blank" className="banner-button-link">
        <p className="banner-button-text">
          {text}
        </p>
      </a>
    </div>
  )
}
