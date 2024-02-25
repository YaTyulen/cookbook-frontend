import React from 'react'
//import ReactRouterDOM from 'react-router-dom'
import SubMenu from './SubMenu'

const Menu = () => {
    return (
        //const Link = ReactRouterDOM.Link;
        <ul className="sidebar__list menu">
            <li className="menu__item">
                <div className="menu__link">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/>
                    </svg>
                    <span>Главная</span>
                </div>
            </li>        
            <li className="menu__item menu__sub-menu">
                <div className="menu__link menu__link--book">
                    <div className="menu__link-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M20,0H5c-1.654,0-3,1.346-3,3V21c0,1.654,1.346,3,3,3H22V2c0-1.103-.897-2-2-2Zm0,18H8V2h4V11l2.5-2.5,2.5,2.5V2h3V18ZM5,2h1V18h-1c-.351,0-.687,.061-1,.172V3c0-.551,.449-1,1-1Zm0,20c-.551,0-1-.449-1-1s.449-1,1-1h15v2H5Z"/>
                        </svg>
                        <span>Книга рецептов</span>
                    </div>    
                </div>        
                <SubMenu />  
            </li>
        </ul>
    )
}

export default Menu















