import React from 'react'

import eventpic from '../../../../images/event_hacker.png'
import Button from '../../../Button'

const SecondCard = () => {
  const handleDemo = () => {
    window.open('https://countryapptrial.netlify.com')
  }

  const handleRepo = () => {
    window.open('https://github.com/GiangNguyen1207/CountryApp')
  }

  return (
    <div className="project-card">
      <div className="project-card-grid">
        <div className="project-image">
          <img
            src={eventpic}
            width="100%"
            height="100%"
            alt="Event hacker app"
          />
        </div>
        <div className="project-content">
          <h3>Country App</h3>
          <p>
            A small web app built with Reactjs and Material UI. The web app
            allows users to search for countries by name and see the information
            of each country. Countries can also be sorted by each column, for
            example, name, languages, etc. Besides, customers can add all the
            countries they like into a 'favourite' cart.
          </p>
          <p>
            Tech stacks: TypeScript, React, Redux(Thunk + Saga), Material UI
          </p>
          <Button label="Live demo" handleButton={handleDemo} />
          <Button label="Github Repository" handleButton={handleRepo} />
        </div>
      </div>
    </div>
  )
}

export default SecondCard
