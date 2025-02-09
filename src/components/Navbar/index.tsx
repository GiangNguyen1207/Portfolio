import React from "react";
import { NavLink } from "react-router";

import brandName from "assets/images/brand_name.png";
import "./style.scss";

type Props = {
  isNavbarOpen: boolean;
};

const DesktopAppBar = ({ isNavbarOpen }: Props) => {
  return (
    <>
      <img src={brandName} alt="brand name" />
      <ul className={isNavbarOpen ? "nav-links nav-links--open" : "nav-links"}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "link link--active" : "link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "link link--active" : "link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/stacks"
          className={({ isActive }) =>
            isActive ? "link link--active" : "link"
          }
        >
          Stacks
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "link link--active" : "link"
          }
        >
          Projects
        </NavLink>
      </ul>
    </>
  );
};

export default DesktopAppBar;
