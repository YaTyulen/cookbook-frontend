import React, {useState} from 'react'
import HeaderSidebar from './HeaderSidebar'
import MenuSidebar from './MenuSidebar'
import FooterSidebar from './FooterSidebar'

const Sidebar = () => {

  const [menuActive, setMenuActive] = useState(false);

  const onChange = () => {
    setMenuActive(!menuActive)
  }
  
  return (
    // открыть меню - класс sidebar--open
    <div className={menuActive ? 'sidebar sidebar--open' : 'sidebar'}>
      <HeaderSidebar menuActive={menuActive}  onChange={onChange} />
      <MenuSidebar />
      <FooterSidebar />
    </div>
  )
}

export default Sidebar