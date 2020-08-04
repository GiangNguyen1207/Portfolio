import React from 'react'

import Eventhacker from './component/FirstCard'
import CountryApp from './component/SecondCard'
import './style.scss'

const Projects = () => {
  return (
    <div className="project-container">
      <p className="title">My projects</p>
      <Eventhacker />
      <CountryApp />
    </div>
  )
}

export default Projects
