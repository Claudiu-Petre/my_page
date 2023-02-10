import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
      
  const [showMenu, setShowMenu] =useState(false);

  let menu;
  let menuMask;

  if(showMenu){
    menu = <div className='menu'>...the menu...</div>
  }

  menuMask = <div className='menumask'></div>
  
  return (
    <nav>
      <span className='fontawesome'>
      <FontAwesomeIcon 
      icon={faBars}
      onClick={() => setShowMenu(!showMenu)} />
      </span>
        
        { menuMask } 
        { menu }

    </nav>
  
  )
}

export default Navigation
