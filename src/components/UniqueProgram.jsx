import React from 'react';
import UniqueProgramm from './UniqueProgramm.css'

const UniqueProgram = () => {
    return (
        <div className='unique-program'>


            <div className='unique-program-column'>
                <div className='unique-program-text'>
                    <h1 className='unique-program-main'>ЭТО&nbsp;<h1 style={{color: '#E91776'}}>УНИКАЛЬНАЯ</h1><h1 className='br'><br/></h1></h1>
                    <h1>КОМПЛЕКСНАЯ ПРОГРАММА</h1>
                    <h2 className='h2-correct'>ДЛЯ БЕРЕМЕННЫХ НА ЛЮБОМ СРОКЕ И ПЛАНИРУЮЩИХ БЕРЕМЕННОСТЬ</h2>
                </div>

                <div className='features'>
                    <span><strong>👉 100% победы над токсикозом</strong> с помощью специальной диеты и авторских техник</span>
                    <span><strong>👉 минимум растяжек</strong> после родов</span>
                    <span><strong>👉 −10 кг после родов</strong> до начала тренировок</span>
                    <strong>👉 9 месяцев без «тревожности беременных»</strong>
                    <span><strong>👉 280 дней беременности с радостью</strong> от собственного отражения в зеркале</span>
                </div>
            </div>

        </div>
    );
};

export default UniqueProgram;