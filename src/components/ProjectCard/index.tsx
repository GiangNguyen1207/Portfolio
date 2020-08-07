import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'

import ButtonComponent from 'components/Button'
import './styles.scss'

type Props = {
  key: string;
  projectId: number;
  title: string;
  pic: string;
  description: string;
  stacks: string;
  onClickDemo: () => void;
  onClickRepo: () => void;
};

const ProjectCard = ({
  projectId,
  title,
  pic,
  description,
  stacks,
  onClickDemo,
  onClickRepo,
}: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <Accordion>
      <Accordion.Toggle
        className={`accordion__content accordion__content--${
          isOpen ? 'hideOverlay' : ''
        }`}
        eventKey={`${projectId}`}
        onClick={() => setOpen(!isOpen)}
      >
        <img src={pic} width="100%" alt={title} className="project-image" />
        <div className="overlay">
          <p className="project-text">{title}</p>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={`${projectId}`}>
        <div className="accordion__collapse">
          <p>{description}</p>
          <p>Tech stacks: {stacks}</p>
          <div className="project-card-button">
            <ButtonComponent
              label="Live demo"
              handleButton={onClickDemo}
              type="big"
            />
            <ButtonComponent
              label="Github Repository"
              handleButton={onClickRepo}
              type="big"
            />
          </div>
        </div>
      </Accordion.Collapse>
    </Accordion>
  )
}

export default ProjectCard
