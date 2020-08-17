import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'

import Button from 'components/Button'
import './styles.scss'

type Props = {
  key: string;
  projectId: number;
  title: string;
  pic: string;
  description: string;
  stacks: string;
  demolink?: string;
  onClickDemo: () => void;
  onClickRepo: () => void;
};

const ProjectCard = ({
  projectId,
  title,
  pic,
  description,
  stacks,
  demolink,
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
            {demolink && (
              <>
                <Button
                  label="Live demo"
                  handleButton={onClickDemo}
                  type="big"
                />
                <Button
                  label="Github Repository"
                  handleButton={onClickRepo}
                  type="big"
                />
              </>
            )}
          </div>
        </div>
      </Accordion.Collapse>
    </Accordion>
  )
}

export default ProjectCard
