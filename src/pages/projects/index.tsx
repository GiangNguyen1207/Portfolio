import React from 'react'

import ProjectCard from 'components/ProjectCard'
import { projects } from 'pages/projects/components/projects'
import './style.scss'

const Projects = () => {
  return (
    <div className="project-container">
      <p className="title">Below are my projects that I have joined:</p>
      <div className="project-container__card">
        {projects.map((p, index) => {
          return (
            <ProjectCard
              projectId={index}
              title={p.title}
              pic={p.pic}
              description={p.description}
              stacks={p.stacks}
              onClickDemo={() => window.open(p.demoLink)}
              onClickRepo={() => window.open(p.repoLink)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects