import React from 'react'

import EventHackerApp from 'pages/projects/components/EventHacker'
import CountryApp from 'pages/projects/components/CountryApp'
import './style.scss'

const Projects = () => {
  return (
    <div className="project-container">
      <p className="title">Below are my projects that I have joined:</p>
      <div className="project-container__card">
        <EventHackerApp />
        <CountryApp />
      </div>
    </div>
  )
}

export default Projects
