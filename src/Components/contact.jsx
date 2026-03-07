import './contact.css'
import theme_pattern from '../assets/theme_pattern.svg'
import call_icon from '../assets/call_icon.svg'
import email_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import React from 'react'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e9b639c8-f9eb-4225-a6f5-b1f9c8e258b2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };
 return (
  <div id='connect' className="contact">
    <div className="contact-tilte">
      <h1>Get in touch</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="contact-section">
      <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I'm currently available to a new projects,so feel free to send me a message about anything that you want me to work on.You can Contact anytime.</p>
        <div className="contact-details">
          <div className="contact-detail">
           <img src={email_icon} alt="" /><p>sahuvinay135@gmail.com</p>
          </div>
            <div className="contact-detail">
            <img src={call_icon} alt="" /><p>Phone- +91-8821087244</p>
          </div>
            <div className="contact-detail">
            <img src={location_icon} alt="" /> <p>Indore,Madhya Pradesh</p>
          </div>
          </div>
          </div>
          <div className="contact-container">
    <h2>Contact Me</h2>
    <p>Feel free to reach out by filling the form below.</p>
       <form onSubmit={onSubmit} className="contact-right">
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required/>
      </div>

      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message..." required></textarea>
      </div>

      <button type="submit" className="btn" >Send Message</button>
    </form>
    </div>
    </div>
    </div>
 )
}
export default Contact;