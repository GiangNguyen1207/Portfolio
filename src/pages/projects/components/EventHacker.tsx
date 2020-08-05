import React from 'react'

import eventpic from 'images/event_hacker.png'
import ProjectCard from 'components/ProjectCard'

const EventHackerApp = () => {
  const handleDemo = () => {
    window.open('https://eventhacker.herokuapp.com/')
  }

  const handleRepo = () => {
    window.open('https://github.com/GiangNguyen1207/Event-hacker')
  }

  return (
    <ProjectCard
      title="Event hacker"
      pic={eventpic}
      text="A small web app built with Reactjs and Bootstrap. The web app allows
      users to search for events by category, name or location and see the
      details of their chosen events."
      stacks="JavaScript, React, Bootstrap"
      onClickDemo={handleDemo}
      onClickRepo={handleRepo}
    />
  )
}

export default EventHackerApp
