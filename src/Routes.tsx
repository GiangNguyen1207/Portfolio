import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ Homepage } />
    <Route exact path='/about' component={ About } />
    <Route exact path='/skills' component={ Skills } />
    <Route exact path='/projects' component={ Projects } />
    <Route exact path='/contact' component={ Contact } />
  </Switch>
)

export default Routes