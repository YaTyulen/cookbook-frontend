import React from 'react'

const About = () => {
    return (
        <section className="about">
                <div className="about__container">
                    <h2>Твое место для хранения рецептов</h2>
                    <p className="about__info-1">
                        Время повареных книг, доставшихся от бабушки и переписанных вручную уже прошло, все рецепты мы уже ищем в сети
                        и зачастую не хотим переписывать руками в тетрадку. Но как хранить найденные рецепты? Ведь чаще всего они 
                        разбросаны по различным сайтам
                    </p>
                    <strong className="about__slogan">Выход есть!</strong>
                    <p className="about__info-2">Книга рецептов онлайн <strong>"CookBook"</strong> позволит тебе сохранить свои рецепты, просто добавив их к себе в аккаунт!</p>
                    <p className="about__info-3">
                        К тому же, здесь ты сможешь делиться своими рецептами и сохранять чужие!
                    </p>
                </div>
            </section>
    )
}

export default About