import React from 'react'
import MenuItem from './MenuItem'


const SubMenu = () => {
  return (
    <ul className="sub-menu">
        <MenuItem text='Супы' id='soup' />
        <MenuItem text='Горячее' id='hot' />
        <MenuItem text='Салаты' id='salad' />
        <MenuItem text='Выпечка' id='bakery' />
        <MenuItem text='Торты' id='cake' />
    </ul>
  )
}

export default SubMenu