import React from 'react'
//import Auth from './Auth'
import Banner from './Banner'
import Carusel from './Carusel'
import About from './About'
import Registration from './Registration'

const ContentSection = () => {
    return (
        <div className="content">
            <main>
                <Banner />
                <Carusel />
                <About />
                <Registration />
            </main>
        </div>
    )
}

export default ContentSection