import React from 'react'
import Menu from './Menu'


const MenuSidebar = () => { 
  return (
    <section className="sidebar__menu">
        <nav className="sidebar__navigation">
            <Menu />
        </nav>
    </section>
  )
}

export default MenuSidebar