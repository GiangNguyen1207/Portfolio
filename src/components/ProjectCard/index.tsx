import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'

import Button from 'components/Button'
import './styles.scss'

type Props = {
  title: string;
  pic: string;
  text: string;
  stacks: string;
  onClickDemo: () => void;
  onClickRepo: () => void;
};

const ProjectCard = ({
  title,
  pic,
  text,
  stacks,
  onClickDemo,
  onClickRepo,
}: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div
      className="project-card"
      onClick={() => setOpen(!isOpen)}
      aria-controls="collapse-text"
      aria-expanded={isOpen}
      onKeyPress={() => setOpen(!isOpen)}
      role="button"
      tabIndex={0}
    >
      <div className="project-card__content">
        <img src={pic} width="100%" alt={title} />
        <p>{title}</p>
        <Collapse in={isOpen}>
          <div id="collapse-text">
            <p>{text}</p>
            <p>Tech stacks: {stacks}</p>
            <Button label="Live demo" handleButton={onClickDemo} />
            <Button label="Github Repository" handleButton={onClickRepo} />
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default ProjectCard
