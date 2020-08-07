import React from 'react'

import Heading from 'components/Heading'
import './styles.scss'

type Props = {
  name: string;
  stacks: string[];
};

const SkillBox = ({ name, stacks }: Props) => {
  return (
    <div className="skill-box">
      <div className="skill-box__heading">
        <Heading title={`${name}`} type="secondary" />
      </div>
      <ul>
        {stacks.map((s) => {
          return <li key={s}>{s}</li>
        })}
      </ul>
    </div>
  )
}

export default SkillBox
