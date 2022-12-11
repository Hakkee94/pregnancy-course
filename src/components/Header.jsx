import React from 'react';
import './HeaderStyle.css'
import HeaderLogo from '../header-logo.png'

const Header = () => {
    return (
        <header>
            <div className='header-logo'>
                <img src={HeaderLogo}/>
            </div>

            <div>
                <a>О проекте</a>
            </div>

            <div>
                <a>Результаты</a>
            </div>

            <div>
                <a>Цены</a>
            </div>

            <div>
                <a>Контакты</a>
            </div>
        </header>
    );
};

export default Header;