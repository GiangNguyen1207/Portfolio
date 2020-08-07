import React from 'react'

import { ReactComponent as AnimationPic } from 'images/animation.svg'
import Heading from 'components/Heading'
import './style.scss'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="introduction-container">
        <Heading title="Hello!" type="primary" />
      </div>
      <div className="animation">
        <AnimationPic />
      </div>
    </div>
  )
}

export default Homepage
