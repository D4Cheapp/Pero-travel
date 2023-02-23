import React from 'react';
import logo from '@img/logo.png'

const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" className="nav__logo"/>
            <div className="links">
                <a href="/home" className="links__link links__link__active">Главная</a>
                <a href="/excursions" className="links__link">Экскурсии</a>
                <a href="/profile" className="links__link">Личный кабинет</a>
            </div>
        </nav>
    );
};

export default NavBar