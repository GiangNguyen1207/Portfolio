import React, { useState } from 'react'

import Navbar from '../Navbar'
import ToggleButton from '../ToggleButton'
import './style.scss'

const AppBar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setNavbarOpen(!isNavbarOpen)
  }

  return (
    <nav>
      <Navbar isNavbarOpen={isNavbarOpen} />
      <ToggleButton isNavbarOpen={isNavbarOpen} toggleMenu={toggleMenu} />
    </nav>
  )
}

export default AppBar
