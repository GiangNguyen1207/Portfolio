import React from 'react'

import Button from '../../../Button'

const FirstCard = () => {
  const handleDemo = () => {
    window.open('https://eventhacker.herokuapp.com/')
  }

  const handleRepo = () => {
    window.open('https://github.com/GiangNguyen1207/Event-hacker')
  }

  return (
    <div className="project-card">
      <div className="project-card-grid">
        <div className="project-image"></div>
        <div className="project-content">
          <h3>Event hacker</h3>
          <p>
            A small web app built with Reactjs and Bootstrap. The web app allows
            users to search for events by category, name or location and see the
            details of their chosen events.
          </p>
          <p>Tech stacks: JavaScript, React, Bootstrap</p>
          <Button label="Live demo" handleButton={handleDemo} />
          <Button label="Github Repository" handleButton={handleRepo} />
        </div>
      </div>
    </div>
  )
}

export default FirstCard
