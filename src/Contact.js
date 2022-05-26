import { useState } from 'react';
import { send } from 'emailjs-com';
import LinkedInLogo from './data/icons/linkedin.png'
import GithubLogo from './data/icons/github_icon.svg'

export const Contact = () => {
  const [emailInfo, setEmailInfo] = useState({
    from_name: '',
    to_name: 'mrmicrowaveoven@gmail.com',
    message: '',
    reply_to: '',
  });
  const handleChange = (e) => {
    setEmailInfo({ ...emailInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_toa61pc',
      'template_u52gh0p',
      emailInfo,
      'ejI_EMnnF_RXl6Jyi'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
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
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='from_name'
            placeholder='from name'
            value={emailInfo.from_name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='message'
            placeholder='Your message'
            value={emailInfo.message}
            onChange={handleChange}
          />
          <input
            type='text'
            name='reply_to'
            placeholder='Your email'
            value={emailInfo.reply_to}
            onChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
