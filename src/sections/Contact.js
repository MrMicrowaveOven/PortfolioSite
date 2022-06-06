import { useState } from 'react';
import { send } from 'emailjs-com';
import LinkedInLogo from './../data/icons/linkedin.png'
import GithubLogo from './../data/icons/github.svg'

export const Contact = () => {
  const [emailInfo, setEmailInfo] = useState({
    from_name: '',
    to_name: 'mrmicrowaveoven@gmail.com',
    message: '',
    reply_to: '',
  });
  const [emailSentStatus, setEmailSentStatus] = useState(null)
  const handleChange = (e) => {
    setEmailInfo({ ...emailInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      emailInfo,
      process.env.REACT_APP_EMAIL_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setEmailSentStatus(true)
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setEmailSentStatus(false)
      });
  };

  const formValid = Object.keys(emailInfo).map(key => {
    return emailInfo[key].trim() !== ""
  }).every(value => value !== false)

  return (
    <div className="contact-body">
      <div className="contact-info">
        <div className="contact-info-title">Contact Info</div>
        <div className="contact-info-text">Currently residing in New Orleans, LA</div>
        <div className="contact-info-text">(714)809-9426</div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/benjzagorski/" target="_blank">
            <img src={LinkedInLogo} className="contact-icon"/>
          </a>
          <a href="https://github.com/MrMicrowaveOven" target="_blank">
            <img src={GithubLogo} className="contact-icon"/>
          </a>
        </div>
        <div className="contact-info-text">Email me at&nbsp;
          <a href = "mailto: benj@zagorski.com">Benj@Zagorski.com</a>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form-title">Say Hello!</div>
        <form onSubmit={onSubmit} className="contact-form-fields">
          <div>Name</div>
          <input
            type='text'
            name='from_name'
            placeholder='Name'
            value={emailInfo.from_name}
            onChange={handleChange}
          />
          <div>Email</div>
          <input
            type='text'
            name='reply_to'
            placeholder='Email'
            value={emailInfo.reply_to}
            onChange={handleChange}
          />
          <div>Message</div>
          <textarea
            type='text_area'
            name='message'
            placeholder='Message'
            value={emailInfo.message}
            onChange={handleChange}
            rows="10"
            cols="30"
          />
          <br/>
          <button type='submit' disabled={formValid ? "" : "disabled"}>Submit</button>
        </form>
        <div className={emailSentStatus === true ? "email-confirmation-message" : "hidden"}>Email sent!</div>
        <div className={emailSentStatus === false ? "email-failure-message" : "hidden"}>
          Sorry, looks like something went wrong.
          <br/>
          Try emailing me at benj@zagorski.com
        </div>
      </div>
    </div>
  )
}
