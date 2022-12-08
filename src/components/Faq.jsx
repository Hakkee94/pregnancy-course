import React from 'react';
import FaqStyle from './FaqStyle.css'
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import questionsAndAnswers from "./QuestionsAndAnswers";
import {useRef} from "react";
// import {Link} from "react-scroll";

let QuestionsAndAnswersList = [
    {question: 'Есть ли противопоказания для занятий?', answer: 'Мы собрали список основных противопоказаний, с которым вы можете ознакомиться перед покупкой в отдельном блоке на нашем сайте.'},
    {question: 'Можно купить только тот триместр, который мне сейчас подходит по сроку беременности?', answer: 'Да, у вас есть возможность приобрести триместры по отдельности. Вы приобретаете именно тот формат участия, который соответствует вашему сроку беременности.'},
    {question: 'Какой срок доступа к тренировкам, если покупать программы отдельно по триместрам?', answer: 'Срок доступа к каждому триместру составляет 1 год после старта тренировок.'},
    {question: 'Входят ли в курс рекомендации по питанию?', answer: 'В курсе есть рекомендации по питанию для облегчения токсикоза и других симптомов. Рекомендации будут представлены в формате zoom-сессии от трех специалистов: психолог, нутрициолог и гинеколог-эндокринолог.'},
    {question: 'Сколько времени длится одна тренировка?', answer: 'Длительность одной тренировки составляет от 15 до 45 минут. Тренировки проходят в домашних условиях в удобном для вас режиме.'},
    {question: 'Какой инвентарь нужен для тренировок?', answer: 'Вам потребуется: коврик для фитнеса (по желанию), фитбол 55-60 см, фитнес-резинка или ремень для йоги, гантели 2 шт. (по 1-2 кг каждая), мяч для пилатеса и плед.'},
    {question: 'Могу ли я приступить к тренировке, которая соответствует моей неделе беременности в триместре?', answer: 'Вы можете начать заниматься в любой удобный для вас момент. Для этого нужно будет самостоятельно проставить отметку о выполнении предыдущих тренировок в прошедших неделях, после этого вам откроется доступ к вашей актуальной неделе тренировок в триместре.'},
    {question: 'Тренировки проходят в определенное время?', answer: 'Вы сможете тренироваться в любом удобном для вас месте, дату и время для занятий вы определяете сами. Для прохождения вам потребуется от 15 до 45 минут свободного времени в течение дня.'},
    {question: 'Можно ли заниматься дома?', answer: 'Программа специально разработана для тренировок в домашних условиях.'},
    {question: 'Смогу ли я заниматься дома, если живу не в России?', answer: 'Платформа доступна для всех пользователей, и в любой точке мира. Для этого вам потребуется смартфон, планшет или компьютер со стабильным доступом в интернет. Также, для удобства вы можете использовать SmartTV.'},
    {question: 'Актуален ли курс для тех, кто только планирует беременность?', answer: 'Программа актуальна и для тех, кто планирует беременность. Так как пройдя курс вы сможете правильно подготовиться к физиологическим изменениям своего тела во время беременности.'},
    {question: 'Я оплатила курс, но мне ничего не открылось. Что делать?', answer: 'Курс доступен на платформе GymTeam. Приобретенная программа будет доступна по тому номеру телефона, который вы указали при покупке. Поэтому, рекомендуем вам проверить актуальность личных данных, указанных при покупке. Если вы найдете несоответствие, сразу напишите об этом в службу поддержки по адресу - https://mama.ru/.'},
    {question: 'Можно ли «заморозить» программу во время прохождения курса, а потом продолжить?', answer: 'Доступ можно «заморозить» на период от 1 до 4 недель, при условии наличия медицинской справки от врача. По вопросам заморозки доступа, обращайтесь в службу поддержки по адресу - https://mama.ru/.'},
]


const Faq = (props) => {

    return (
        <div className='faq-container' id='faq'>
            <div className='faq-title'>
                <h1><strong>вопросы&nbsp;и&nbsp;ответы</strong></h1>
            </div>

            <div className='questions-and-answers-container'>
                <QuestionsAndAnswers list={QuestionsAndAnswersList}/>
            </div>

            <div className='take-part-btn'>
                <button>Принять участие</button>
            </div>
        </div>
    );
};

export default Faq;