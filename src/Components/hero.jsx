import React from "react";
import './hero.css'
import profileimg from '../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () =>{
return (
<div id="home" className="hero">

  <img src={profileimg} alt="Vinay Sahu" className="img"/>

  <h1>
    <span>I'm Vinay Sahu,</span>
    Full Stack Developer & IoT Enthusiast
  </h1>

  <p>
    I design and develop modern, scalable web applications using the MERN stack.
    Passionate about building real-time IoT systems, integrating APIs, and deploying
    secure, high-performance applications.
  </p>

  <div className="button">
    <div className="connect-btn">
      <AnchorLink className="anchor-link" offset={50} href="#connect">
        Let's Connect
      </AnchorLink>
    </div>
    <a href="/Vinay_Sahu_Resume.pdf" download className="resume-btn">
  My Resume
</a>
  </div>

</div>
);
}

export default Hero;