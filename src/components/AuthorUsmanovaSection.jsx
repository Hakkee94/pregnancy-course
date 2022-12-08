import React from 'react';
import AuthorSection from './AuthorUsmanovaSection.css'

const AuthorUsmanovaSection = () => {
    return (
        // <div className='author-container'>
            <div className='author'>
                <div className='author-info'>
                    <h2 className='pink uppercase'>АВТОР КУРСА</h2>
                    <h1 className='author-name'>любовь&nbsp;шаманова</h1>
                    <h2 className='champ' style={{paddingTop: '10px', paddingBottom: '15px', color: 'black'}}>Чемпионка России по фитнес-бикини и молодая
                        мама, ожидающая второго ребёнка.</h2>
                    <h2 style={{paddingBottom: '15px', color: 'black'}}><strong>После первых родов сбросила 20 кг за 100
                        дней, </strong> благодаря собственной системе
                        тренировок для беременных.</h2>
                    <h2 className='course-text'><strong style={{paddingTop: '15px', color: 'black'}}>Смотрите видео о курсе 🥳 🎉</strong></h2>
                </div>

                {/*<div className='author-video'>*/}
                    {/*<iframe id="vhplayeriframe-c6fbdfc9394908e337568bf4aff414e5"*/}
                    {/*        src="https://player02.getcourse.ru/sign-player/?json=eyJ2aWRlb19oYXNoIjoiYzZmYmRmYzkzOTQ5MDhlMzM3NTY4YmY0YWZmNDE0ZTUiLCJ1c2VyX2lkIjoyNzY4Mzk2NjksImlwIjoiMzcuMjUyLjk0LjEwOCIsInRpbWUiOjE2NjkwMzAzMzgsInBheWxvYWQiOiJ1XzI3NjgzOTY2OSIsInVpX2xhbmd1YWdlIjoicnUiLCJ1c2VyX3JvbGUiOiJhZG1pbiJ9&amp;s=ff1d7284b29011ca11c42d4a55f81729"*/}
                    {/*        className="vhi-iframe js--vhi-iframe"*/}
                    {/*        allow="autoplay; encrypted-media; clipboard-read; clipboard-write;"*/}
                    {/*        sandbox="allow-scripts allow-same-origin allow-popups" allowFullScreen="" frameBorder="0"*/}
                    {/*        scrolling="no"></iframe>*/}
                {/*</div>*/}

            </div>
        // </div>
    );
};

export default AuthorUsmanovaSection;