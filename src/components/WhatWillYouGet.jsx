import React from 'react';
import WhatWillYourGetStyle from './WhatWillYouGetStyle.css'
import YouGainBox from "./YouGainBox";
// import {Link} from "react-scroll";

const WhatWillYouGet = () => {
    return (
        <div className='you-get-container'>
                <div className='what-will-you-get-container'>

                    <h1 style={{marginTop: '40px'}}>ВЫ ПОЛУЧИТЕ:</h1>


                    <div className='you-gain-box-container'>
                        <YouGainBox number='01' strongText='Подтянутое тело'
                                    tallText=' даже при естественном наборе веса'/>
                        <YouGainBox number='02' strongText='Ощущение спокойствия'
                                    tallText=' и уверенности в период ожидания малыша'/>
                        <YouGainBox number='03' strongText='Возможность облегчить неприятные симптомы'
                                    tallText=' на поздних сроках'/>
                        <YouGainBox number='04' strongText='Профилактику' tallText=' ряда послеродовых проблем'/>
                        <YouGainBox number='05' strongText='Лёгкое восстановление'
                                    tallText=' стройности и здоровья после родов'/>
                        <YouGainBox number='06' strongText='Силы,'
                                    tallText=' чтобы адаптироваться в роли молодой мамы'/>
                    </div>



                    <div className='take-part-btn'>
                        <button>Учавствовать</button>
                    </div>




                </div>


        </div>

    );
};

export default WhatWillYouGet;