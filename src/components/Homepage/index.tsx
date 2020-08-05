import React from 'react'

import { ReactComponent as AnimationPic } from '../../images/animation.svg'
import './style.scss'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="introduction-container">
        <p>Hello!</p>
      </div>
      <div className="animation">
        <AnimationPic />
      </div>
    </div>
  )
}

export default Homepage
