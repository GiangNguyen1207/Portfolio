import React from 'react'

import Eventhacker from './component/FirstCard'
import CountryApp from './component/SecondCard'
import './style.scss'

const Projects = () => {
  return (
    <div className="project-container">
      <p className="title">Below are my projects that I have joined:</p>
      <Eventhacker />
      <CountryApp />
    </div>
  )
}

export default Projects
