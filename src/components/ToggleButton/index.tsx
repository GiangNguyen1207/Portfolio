import React from 'react'

import './style.scss'

type Props = {
  isNavbarOpen: boolean,
  toggleMenu: () => void
}

const ToggleButton = ({ isNavbarOpen, toggleMenu }: Props) => {

  let classes = 'burger'

  if(isNavbarOpen) {
    classes = 'burger close'
  }

  return(
    <div className={classes} onClick={toggleMenu}> 
      <div className='line1'></div>
      {/* <div className='line2'></div>
      <div></div> */}
    </div>
  )
}

export default ToggleButton