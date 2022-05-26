import LinkedInLogo from './data/icons/linkedin.png'
import GithubLogo from './data/icons/github_icon.svg'

export const Contact = () => {
  return (
    <div className="contact-body">
      <div className="contact-info">
        <div className="contact-info-title">Contact Info</div>
        <div className="contact-info">Currently residing in New Orleans, LA</div>
        <div className="contact-info">(714)809-9426</div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/benjzagorski/" target="_blank">
            <img src={LinkedInLogo} className="contact-logo"/>
          </a>
          <a href="https://github.com/MrMicrowaveOven" target="_blank">
            <img src={GithubLogo} className="contact-logo"/>
          </a>
        </div>
        <div>Email me at Benj@Zagorski.com</div>
      </div>
      <div className="contact-form">
        <div className="contact-form-title">Say Hello!</div>
        <div>Name</div>
        <div>Email</div>
        <div>Message</div>
      </div>
    </div>
  )
}
