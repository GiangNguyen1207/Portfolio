import React from 'react'

import './style.scss'

type Props = {
  isNavbarOpen: boolean;
  toggleMenu: () => void;
};

const ToggleButton = ({ isNavbarOpen, toggleMenu }: Props) => {
  return (
    <div
      role="button"
      className={`burger burger--${isNavbarOpen ? 'close' : ''}`}
      onClick={toggleMenu}
      onKeyPress={toggleMenu}
      tabIndex={0}
    >
      <div className="line1"></div>
    </div>
  )
}

export default ToggleButton
