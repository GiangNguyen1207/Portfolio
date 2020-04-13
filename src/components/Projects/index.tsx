import React from 'react'

import './style.scss'
import cardImage from '../../images/front_end.png'

const Projects = () => {

  const handleEventHackerAppDemo = () => {
    window.open('https://eventhacker.herokuapp.com/')
  }

  const handleEventHackerAppRepo = () => {
    window.open('https://github.com/GiangNguyen1207/Event-hacker')
  }

  const handleCountryAppDemo = () => {
    window.open('https://countryapptrial.netlify.com')
  }

  const handleCountryAppRepo = () => {
    window.open('https://github.com/GiangNguyen1207/CountryApp')
  }

  return(
    <div className='project-container'>
      <p className='title'>My projects</p>
      <div className='project-card'>
        <div className='project-card-grid'> 
          <div className='project-image'>
            <img src={cardImage} alt='avatar' width='100%' height='100%'/> 
          </div>
          <div className='project-content'>
            <h3>Event hacker</h3>
            <p>
              A small web app built with Reactjs and Bootstrap. 
              The web app allows users to search for events by category, 
              name or location and see the details of their chosen events.
            </p>
            <p>Tech stacks: JavaScript, React, Bootstrap</p>
            <button onClick={handleEventHackerAppDemo}>Live demo</button>
            <button onClick={handleEventHackerAppRepo}>Github Repository</button>
          </div>
        </div>
      </div>
      <div className='project-card'>
      <div className='project-card-grid'> 
          <div className='project-image'>
            <img src={cardImage} alt='avatar' width='100%' height='100%'/> 
          </div>
          <div className='project-content'>
            <h3>Country App</h3>
            <p>
            A small web app built with Reactjs and Material UI. 
            The web app allows users to search for countries by name and see the information of each country.
             Countries can also be sorted by each column, for example, name, languages, etc. 
             Besides, customers can add all the countries they like into a 'favourite' cart.
            </p>
            <p>Tech stacks: TypeScript, React, Redux(Thunk + Saga), Material UI</p>
            <button onClick={handleCountryAppDemo}>Live demo</button>
            <button onClick={handleCountryAppRepo}>Github Repository</button>
          </div>
        </div>
      </div>
      </div>
  )
}
 

export default Projects