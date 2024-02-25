import React from 'react'
import {HandySvg} from 'handy-svg';
import burger from '../img/icons/burger.svg';

const Burger = () => {
  return (
    <button className="sidebar__button">
      <HandySvg src={burger} className="icon" width="32" height="32"/>  
    </button> 
  )
}

export default Burger