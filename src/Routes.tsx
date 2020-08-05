import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from 'pages/home'
import About from 'pages/about'
import Skills from 'pages/skills'
import Projects from 'pages/projects'
import Contact from 'pages/contact'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default Routes
