import React from 'react'

import './style.scss'

const Skills = () => {
  return (
    <div className="skill-container">
      <p className="title">
        Find more about the stacks I have prepared on the fullstack path:
      </p>
      <div className="skill-grid">
        <div className="skill-grid-box">
          <h4>Front-end development</h4>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Respnsive design: Bootstrap, Material UI</li>
          </ul>
        </div>
        <div className="skill-grid-box">
          <h4>Back-end development</h4>
          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>REST API</li>
            <li>Testing framework: Jest</li>
            <li>Database: MongoDB, PostgreSQL</li>
          </ul>
        </div>
        <div className="skill-grid-box">
          <h4>Devops</h4>
          <ul>
            <li>Github</li>
            <li>Bash scripting</li>
            <li>Cloud: AWS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
