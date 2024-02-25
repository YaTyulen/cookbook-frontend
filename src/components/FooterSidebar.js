import React from 'react'

const FooterSidebar = () => {
    return (
        <footer className="sidebar__footer">
            <div className="sidebar__auth">
                <button className="sidebar__button-auth" type="button">
                    <span>Войти</span>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M2,21V3A1,1,0,0,1,3,2H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V22H3A1,1,0,0,1,2,21Z"/>
                        <path d="M24,13l0-2-16.444.031,4.323-4.324L10.463,5.293,5.877,9.879a3,3,0,0,0,0,4.242l4.586,4.586,1.414-1.414L7.614,13.03Z"/>
                    </svg>
                </button>
            </div>
        </footer>
    )
}

export default FooterSidebar