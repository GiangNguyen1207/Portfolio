import React from 'react'

import Heading from 'components/Heading'
import SkillBox from 'components/SkillBox'
import { frontend, backend, devOps } from 'pages/skills/components/skills'
import './style.scss'

const Skills = () => {
  return (
    <div className="skill">
      <Heading
        title="Find more about the stacks I have prepared:"
        type="colorful"
      />
      <div className="skill__grid">
        <SkillBox name="Front-end" stacks={frontend} />
        <SkillBox name="Back-end" stacks={backend} />
        <SkillBox name="DevOps" stacks={devOps} />
      </div>
    </div>
  )
}

export default Skills
