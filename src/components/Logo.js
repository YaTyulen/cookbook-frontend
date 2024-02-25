import React from 'react'
import logo from '../img/logo-1.png';

const Logo = () => {
  return (
    <div className="sidebar__wrapper-logo">
        <img className="sidebar__logo" width="200" height="80" src={logo} alt="CookBook" /> 
    </div>
  )
}

export default Logo