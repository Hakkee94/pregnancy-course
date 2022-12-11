import React from 'react';
import PresentsStyle from './PresentsStyle.css'

const Presents = () => {
    return (
        <div className='presents-container'>
            <div className='present-img'>
                <img src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/4ed63943ebde8197f402c3869fab7a49.png/s/s1200x/a/3187/sc/214'/>
            </div>

            <div className='presents-second-column'>
                <div>
                    <h1><strong style={{color: '#E91776'}}>подарки </strong><strong>за покупку</strong></h1>
                    <h2><strong>Полезные материалы</strong> для будущих мам</h2>
                </div>


                <ul>
                    <li><strong>Бонусные видео</strong> Любови Шамановой для беременных и планирующих стать мамой.</li>
                    <li><strong>Дневник беременности.</strong> Удобный трекер для мониторинга ведения беременности, который вы будете заполнять самостоятельно.</li>
                    <li><strong>Чек-лист</strong> «Что брать с собой в роддом»</li>
                    <li><strong>Чек-лист</strong> «Какая музыка хорошо влияет на плод»</li>
                    <li><strong>Гайд с подборкой книг</strong> «Ребенок слышит или что почитать животику»</li>
                    <li><strong>Чек-лист </strong>«5 экспресс-способов победить токсикоз»</li>
                    <li><strong>Таблица </strong> прибавления веса во время беременности</li>
                    <li><strong>Пособие</strong> «Как спастись от ринита беременных»</li>
                    <li><strong>Чек-лист</strong> «Как справляться с тревожностью»</li>

                </ul>
            </div>
        </div>
    );
};

export default Presents;