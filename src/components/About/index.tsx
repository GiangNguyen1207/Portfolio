import React from 'react'

import avatar from 'images/pic.jpg'
import './style.scss'

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <img src={avatar} alt="avatar" className="avatar" />
        <b className="about-text1">Hi. My name is Giang. Nice to meet you!</b>
        <p className="about-text2">
          I am a fresh full-stack developer, specializing in designing,
          developing and managing web application. I have experience in
          TypeScript, JavaScript, ReactJs and NodeJs.
        </p>
      </div>
    </div>
  )
}

export default About
