import React from 'react'

import { ReactComponent as AnimationPic } from 'assets/images/animation.svg'
import Heading from 'components/Heading'
import Description from 'components/Description'
import './style.scss'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__greeting">
        <div className="homepage-heading">
          <Heading title="Hello!" type="primary" />
        </div>
        <div className="homepage-text">
          <Description text="I am a junior full-stack developer." type="left" />
          <Description
            text="Specialize in JavaScript, 
            TypeScript, ReactJS, NodeJS and responsive design."
            type="left"
          />
        </div>
      </div>
      <div className="homepage__animation">
        <AnimationPic />
      </div>
    </div>
  )
}

export default Homepage
