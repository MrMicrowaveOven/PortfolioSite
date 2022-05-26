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
          <img src={LinkedInLogo} className="contact-logo"/>
          <img src={GithubLogo} className="contact-logo"/>
        </div>
        <div>Email me at Benj@Zagorski.com</div>
      </div>
      <div className="contact-form">
        <div>Say hello!</div>
        <div>Name</div>
        <div>Email</div>
        <div>Message</div>
      </div>
    </div>
  )
}
