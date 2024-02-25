import React from 'react'
import CaruselCard from './CaruselCard'
import {HandySvg} from 'handy-svg';
import iconArrow from '../img/icons/arrow.svg';
import img1 from '../img/image-cake.jpeg'
import img2 from '../img/image-2.jpg'
import img3 from '../img/image-3.jpg'
import img4 from '../img/image-4.jpg'


const Carusel = (props) => {
    return (
        <section className="carusel carusel__container">
            <h2>Лучшие рецепты</h2>
            <div className="carusel__wrapper">
                <ul className="carusel__list">
                    <CaruselCard text="Нежнейшие кексы на кокосовом молоке" img={img1} likes="200" />
                    <CaruselCard text="Овсянка с ягодами" img={img2} likes="150" />
                    <CaruselCard text="Запеченая рыба" img={img3} likes="123" />
                    <CaruselCard text="Настоящий борщ" img={img4} likes="68" />
                </ul>
            </div>

            <div className="carusel_buttons">
                <div href="#carousel__slide2" className="carousel__prev">
                    <HandySvg src={iconArrow} className="icon" width="50" height="90"/>
                    <span>Предыдущий слайд</span>
                </div>
                <div href="#carousel__slide4" className="carousel__next">
                    <HandySvg src={iconArrow} className="icon" width="50" height="90"/>
                    <span>Следующий слайд</span>
                </div>
            </div>
        </section>
    )
}

export default Carusel