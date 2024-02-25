import React from 'react'
import {HandySvg} from 'handy-svg';
import iconLike from '../img/icons/likes-1.svg';

const CaruselCard = (props) => {
    return (
        <li className="carusel__card">
            <div className="carusel__link">
                <img src={props.img} width="100%" height="100%" alt="Рецепт" />
                <div className="carusel__card-text">
                    <span>{props.text}</span>
                    <div className="carusel__likes">
                        <HandySvg src={iconLike} className="icon" width="20" height="20"/>
                        <span>{props.likes}</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CaruselCard