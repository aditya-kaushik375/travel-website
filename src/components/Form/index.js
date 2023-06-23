import emailjs from '@emailjs/browser'

import './index.css'

const Form = () => {
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xq87une',
        'template_3o40gaz',
        e.target,
        '4DqzE1vtN2X4LYp-P',
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        },
      )
  }
  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <label className=".form-label" htmlFor="name">
          Name
        </label>
        <input className="form-input" type="text" id="name" name="name" />
        <label htmlFor="mail">Email</label>
        <input className="form-input" type="email" id="mail" name="user_mail" />
        <label htmlFor="msg">Message</label>
        <textarea className="form-textarea" id="msg" rows="6" name="message" />
        <button className="submit" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

export default Form
