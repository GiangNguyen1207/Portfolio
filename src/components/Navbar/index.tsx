import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'

import brandName from '../../images/brand_name.png'
import './style.scss'

type Props = {
  isNavbarOpen: boolean
}

const DesktopAppBar = ({ isNavbarOpen }: Props) => {
  const history = useHistory()

  return(
    <>
      <img src={brandName} alt='brand name'/> 
      <ul className={isNavbarOpen ? 'nav-links mobile-nav-links-open' : 'nav-links'}>
        <NavLink exact to='/' className='link' activeClassName='active'>Home</NavLink>
        <NavLink exact to='/about' className='link' activeClassName='active'>About</NavLink>
        <NavLink exact to='/skills' className='link' activeClassName='active'>Skills</NavLink>
        <NavLink exact to='/projects' className='link' activeClassName='active'>Projects</NavLink>
        <NavLink exact to='/contact' className='link' activeClassName='active'>Contact</NavLink>
      </ul>
    </>
  )
}
 
export default DesktopAppBar