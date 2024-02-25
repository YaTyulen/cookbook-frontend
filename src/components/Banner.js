import React from 'react'
import img from '../img/logo-2.png'

const Banner = () => {
    return (
        <section className="banner">
            <img width="500px" src={img} alt="CookBook" />
            <h1>Твоя книга рецептов</h1>
        </section>
    )
}

export default Banner