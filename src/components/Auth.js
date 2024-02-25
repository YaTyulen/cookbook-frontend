import React from 'react'

const Auth = () => {
    return (
        <div className="auth auth__container">
            <form className="auth__form" method="POST">
                <legend className="auth__legend">Вход</legend>
                <div className="auth__wrapper">
                    <label className="auth__label" htmlFor="login">Email:</label>
                    <input className="auth__input auth__input--login" type="email" id="login" name="login" placeholder="Введите логин" />
                    <label className="auth__label" htmlFor="password">Пароль:</label>
                    <input className="auth__input auth__input--password" type="password" id="password" name="password" placeholder="Введите пароль" />
                    <input className="auth__submit" type="submit" value="Войти" />
                </div>
            </form>
        </div>
    )
}

export default Auth