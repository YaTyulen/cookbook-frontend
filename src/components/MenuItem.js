import React from 'react'
//import ReactRouterDOM from 'react-router-dom'
import SvgSelector from './SvgSecector'

const MenuItem = (props) => {
    //const Link = ReactRouterDOM.Link;
    return (
        <li className="sub-menu__item">
            <div className="sub-menu__link menu__link">
                <SvgSelector id={props.id} />                              
                <span>{props.text}</span>
            </div>
        </li>
    )
}

export default MenuItem