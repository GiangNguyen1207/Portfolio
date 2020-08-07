import React from 'react'

import Heading from 'components/Heading'
import './style.scss'

const Skills = () => {
  return (
    <div className="skill-container">
      <Heading
        title="Find more about the stacks I have prepared on the fullstack path:"
        type="colorful"
      />
      <div className="skill-container__grid">
        <div className="skill-box">
          <div className="skill-box__heading">
            <Heading title="Front-end development" type="secondary" />
          </div>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Respnsive design: Bootstrap, Material UI</li>
          </ul>
        </div>
        <div className="skill-box">
          <div className="skill-box__heading">
            <Heading title="Back-end development" type="secondary" />
          </div>
          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>REST API</li>
            <li>Testing framework: Jest</li>
            <li>Database: MongoDB, PostgreSQL</li>
          </ul>
        </div>
        <div className="skill-box">
          <div className="skill-box__heading">
            <Heading title="Devops" type="secondary" />
          </div>
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
