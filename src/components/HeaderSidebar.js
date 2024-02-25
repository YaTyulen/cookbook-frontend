import React from 'react'
import Burger from './Burger'
import Logo from './Logo'

const HeaderSidebar = (props) => {
  return (
    <div className="sidebar__header" onClick={props.onChange}>
      <Burger />
      <Logo />
    </div>
  )
}

export default HeaderSidebar