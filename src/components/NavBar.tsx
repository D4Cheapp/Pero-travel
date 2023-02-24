import React from 'react';
import logo from '@img/logo.png'
import {NavLink, useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    function imageClick() {
        navigate('/')
    }

    return (
        <nav>
            <img src={logo} alt="logo" className="nav__logo" onClick={imageClick}/>
            <div className="links">
                <NavLink to='/' className='links__link'>Главная</NavLink>
                <NavLink to="/excursions" className='links__link'>Экскурсии</NavLink>
                <NavLink to="/profile" className='links__link'>Личный кабинет</NavLink>
            </div>
        </nav>
    );
};

export default NavBar