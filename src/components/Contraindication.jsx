import React from 'react';
import ContraindicationStyle from './ContraindicationStyle.css'

const Contraindication = () => {
    return (
        <div className='contraindication-container'>
            <div className='contraindication-title'>
                <h1><strong>общие противопоказания для тренировок</strong></h1>
            </div>

            <div className='contraindication-list'>
                <h3>👉 низкий показатель гемоглобина (менее 70)</h3>
                <h3>👉 любые угрозы для плода (угроза потери беременности, риск преждевременных родов‚ и т. д.)</h3>
                <h3>👉 кровотечение во время беременности</h3>
                <h3>👉 аномальное положение шейки матки</h3>
                <h3>👉 разрыв плодных оболочек</h3>
                <h3>👉 гестоз</h3>
                <h3>👉 хронически повышенное артериальное давление</h3>
                <h3>👉 несостоятельность шейки матки</h3>
                <h3>👉 предлежание плаценты</h3>
                <h3>👉 любые другие акушерские или медицинские противопоказания</h3>

                <div>
                    <span>Индивидуальные противопоказания следует уточнить у вашего лечащего врача.</span>
                </div>
            </div>
        </div>
    );
};

export default Contraindication;