import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="header1">
                    <ul>
                        <li>О нас</li>
                        <li>Платформа</li>
                        <li> <NavLink to='/secondpage'>Курсы</NavLink></li>
                        <li> <NavLink to=''>Лекции</NavLink></li>
                        <li> <NavLink to='/thirdpage'>Лекции</NavLink></li>
                        <li>Тарифы</li>
                        <li>Блог</li>
                        <li> <NavLink to='/fourthpage'>Контакты</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;