import React from 'react'
import { NavLink } from 'react-router-dom'

import brandName from 'assets/images/brand_name.png'
import './style.scss'

type Props = {
  isNavbarOpen: boolean;
};

const DesktopAppBar = ({ isNavbarOpen }: Props) => {
  return (
    <>
      <img src={brandName} alt="brand name" />
      <ul className={isNavbarOpen ? 'nav-links nav-links--open' : 'nav-links'}>
        <NavLink exact to="/" className="link" activeClassName="link--active">
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          className="link"
          activeClassName="link--active"
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/stacks"
          className="link"
          activeClassName="link--active"
        >
          Stacks
        </NavLink>
        <NavLink
          exact
          to="/projects"
          className="link"
          activeClassName="link--active"
        >
          Projects
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className="link"
          activeClassName="link--active"
        >
          Contact
        </NavLink>
      </ul>
    </>
  )
}

export default DesktopAppBar
