import React from 'react'

import avatar from '../../images/pic.jpg'
import './style.scss'

const About = () => {
  return (
    <div className="about-container">
      <p className="title">About me</p>
      <div className="about-content">
        <img src={avatar} alt="avatar" className="avatar" />
        <p>
          Hi. My name is Giang. I am a fresh full-stack developer, specializing
          in designing, developing and managing web application. I have
          experience in TypeScript, JavaScript, ReactJs and NodeJs.
        </p>
      </div>
    </div>
  )
}

export default About
