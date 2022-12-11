import React from 'react';
import PriceListStyle from './PriceListStyle.css'

const PriceList = () => {
    return (
        <div className='price-list-cont'>
            <div className='price-list-container' id='price-list-part'>
                <div className='price-list-main-text'>
                    <h1><strong>пройдите курс для беременных, <br/><strong style={{color: '#E91776'}}>чтобы сохранить
                        красоту </strong> <br/>
                        и быстро вернуть стройность <br/>после родов</strong></h1>
                </div>

                <div className='start'>
                    <div>
                        <img style={{height: "30px"}}
                             src='https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5629599.jpg'/>
                    </div>

                    <div>
                        <h2>Старт - 28 ноября</h2>
                    </div>
                </div>

                <h2><strong>Выберите вариант участия:</strong></h2>

                {/*<div className='price-option'>*/}
                {/*    <div>*/}
                {/*        <div className='choice-container'>*/}
                {/*            <div>*/}
                {/*                <input type='radio' style={{marginRight: '10px'}}/>*/}
                {/*            </div>*/}
                {/*            <h2>Курс для беременных II триместр</h2>*/}
                {/*        </div>*/}
                {/*        <div className='course-time'>*/}
                {/*            <h3>13 ноября - 14 ноября 2023 г.</h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className='price'>*/}
                {/*        <h2>3490 руб.</h2>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className='price-option'>*/}
                {/*    <div>*/}
                {/*        <div className='choice-container'>*/}
                {/*            <div>*/}
                {/*                <input type='radio' style={{marginRight: '10px'}}/>*/}
                {/*            </div>*/}
                {/*            <h2>Курс для беременных III триместр</h2>*/}
                {/*        </div>*/}
                {/*        <div className='course-time'>*/}
                {/*            <h3>13 ноября - 14 ноября 2023 г.</h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className='price'>*/}
                {/*        <h2>3490 руб.</h2>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className='price-option'>*/}
                {/*    <div>*/}
                {/*        <div className='choice-container'>*/}
                {/*            <div>*/}
                {/*                <input type='radio' style={{marginRight: '10px'}}/>*/}
                {/*            </div>*/}
                {/*            <h2>Курс для беременных I триместр</h2>*/}
                {/*        </div>*/}
                {/*        <div className='course-time'>*/}
                {/*            <h3>13 ноября - 14 ноября 2023 г.</h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className='price'>*/}
                {/*        <h2>3490 руб.</h2>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className='price-option'>*/}
                {/*    <div>*/}
                {/*        <div className='last-choice-container'>*/}
                {/*            <div>*/}
                {/*                <input type='radio' style={{marginRight: '10px'}}/>*/}
                {/*            </div>*/}
                {/*            <h2>Курс для беременных - все три триместра, доступ на 1 год. Старт 14 ноября</h2>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div className='price'>*/}
                {/*        <h2>7490 руб.</h2>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className='continue-btn'>
                    <button>Продолжить</button>
                </div>

                <div className='bank-img'>
                    <img
                        src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/21fa8f25a95aa0f1bbe18ae3ada291f0.png/s/s1200x/a/3187/sc/362'/>
                </div>

                <div className='installment'>
                    <h2><strong>Курс для беременных доступен в рассрочку</strong></h2>
                    <h3>На 6 месяцев без процентов и переплат от 1249 ₽ в месяц. Первый платёж — через 30 дней. Только
                        для граждан РФ.</h3>
                </div>


            </div>
        </div>
    );
};

export default PriceList;