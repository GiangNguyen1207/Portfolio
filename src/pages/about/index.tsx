import React from 'react'

import avatar from 'assets/images/pic.jpg'
import Heading from 'components/Heading'
import Description from 'components/Description'
import './style.scss'

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <img src={avatar} alt="avatar" className="avatar" />
        <Heading
          title="Hi. My name is Giang. Nice to meet you!"
          type="normal"
        />
        <div className="about-description">
          <Description text="This is a little story about me:" type="center" />
          <Description
            text="I had an interest in technology and 
            building web/web app for a long time. 
            After graduating from Haaga-Helia University of Applied Sciences 
            2 years ago with a Business Administration Degree, I started to 
            equip myself with necessary stacks to become a full-stack developer.
            I am a quick learner, solution-oriented and optimistic person
            who thrives on challenges. "
            type="center"
          />
        </div>
      </div>
    </div>
  )
}

export default About
