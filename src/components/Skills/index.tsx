import React from 'react'

import './style.scss'
import frontend from '../../images/front_end.png'
import backend from '../../images/back_end.png'
import devops from '../../images/devops.png'

const Skills = () => {
  return(
    <div className='skill-container'>
      <p className='title'>My skills</p>
      <div className='skill-grid'>    
        <div className='skill-grid-box'>
          <img src={frontend} alt='front-end' width='90%' className='stack-image'/>
          <h4>Front-end development</h4>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Respnsive design: Bootstrap, Material UI</li>
          </ul>
        </div>
        <div className='skill-grid-box'>
          <img src={backend} alt='back-end' width='90%' className='stack-image'/>
          <h4>Back-end development</h4>
          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>REST API</li>
            <li>Testing framework: Jest</li>
            <li>Database: MongoDB, PostgreSQL</li>
          </ul>
        </div>
        <div className='skill-grid-box'>
        <img src={devops} alt='devops' width='70%' className='stack-image'/>
          <h4>Devops</h4>
          <ul>
            <li>Github</li>
            <li>Bash scripting</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
 
export default Skills