import React from 'react';
import FooterLogo from '../footer-logo.png'
import './FooterStyle.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={FooterLogo}/>
            </div>

            <div className='feedback'>
                <div>
                    <a>E-mail: shavanova@mail.ru</a>
                </div>

                <div>
                    <a>Политика конфиденциальности</a>
                </div>

                <div>
                    <a>Публичная оферта и контактные данные</a>
                </div>

                <div>
                    <span>© ООО «Фитнес», 2020 – 2022</span>
                </div>
            </div>

            <div className='social-links'>
                <div>
                    <img src='https://cdn1.iconfinder.com/data/icons/rounded-social-media/512/vk-256.png'/>
                </div>

                <div>
                    <img src='https://www.prizm-p2p.ru/image/telegram.png'/>
                </div>
            </div>

        </footer>
    );
};

export default Footer;