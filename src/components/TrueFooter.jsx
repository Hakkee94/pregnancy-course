import React from 'react';
import footerLogo from '../../assets/footer-img/footerLogo.png'
import './FooterStyle.css'

const TrueFooter = () => {
    return (
        <div className='footer-container'>
            <div className='brands-logo'>
                <img src={footerLogo}/>
            </div>


            <div className='feedback'>
                <div>
                    <a href='https://mama.ru/'>E-mail: https://mama.ru/</a>
                </div>

                <div>
                    <a href='https://mama.ru/'>Политика конфиденциальности</a>
                </div>

                <div>
                    <a href='https://mama.ru/'>Публичная оферта и контактные данные</a>
                </div>

                <div className='account'>
                    <a href='https://mama.ru/'>Вход в личный кабинет</a>
                </div>

            </div>


            <div className='social-links'>
                <a href="https://mama.ru/">
                    <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM12.2293 10.7753H10.9847C10.2813 10.7753 10.1633 10.3747 9.58333 9.796C9.06 9.27267 8.77 9.674 8.782 10.4193C8.786 10.6173 8.688 10.7753 8.452 10.7753C7.71533 10.7753 6.656 10.8793 5.58267 9.722C4.48467 8.536 3.33333 6.15667 3.33333 5.92267C3.33333 5.784 3.448 5.722 3.63933 5.722H4.90467C5.24 5.722 5.268 5.888 5.362 6.10067C5.75133 6.988 6.68267 8.76867 6.93133 7.77467C7.074 7.204 7.132 5.882 6.52133 5.768C6.17467 5.704 6.78533 5.33333 7.66933 5.33333C7.88933 5.33333 8.128 5.35667 8.372 5.41333C8.82067 5.51733 8.82267 5.71867 8.816 6.012C8.79333 7.12267 8.65933 7.86933 8.952 8.058C9.23133 8.23867 9.966 7.05667 10.3547 6.144C10.4607 5.892 10.482 5.72267 10.7833 5.72267H12.3313C13.142 5.72267 12.2253 6.888 11.5247 7.79733C10.96 8.53 10.99 8.544 11.6467 9.15333C12.114 9.58733 12.6667 10.18 12.6667 10.5153C12.6667 10.674 12.5427 10.7753 12.2293 10.7753Z"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default TrueFooter;