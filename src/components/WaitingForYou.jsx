import React from 'react';
import WaitingForYouStyle from './WaitingForYouStyle.css'
import WaitingForYouBox from "./WaitingForYouBox";

const WaitingForYou = () => {
    return (
        <div className='waiting-for-you-container'>

            {/*<div className='happy-girl'>*/}
            {/*    <img*/}
            {/*        src='https://mfs-10.getcourse.ru/public/files/3187/94/cbd03f08786e5a75a60622218faa7175.png?e=1668164399&s=TJTopcXy09ZlLgcgYzaqwg'/>*/}
            {/*</div>*/}

            <h1>на курсе вас будут ждать:</h1>

            <div className='waiting-for-you-boxes'>
                <WaitingForYouBox src='https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/d16df0ade97ec26763cc7cd07195aa4c.png/s/500x/a/3187/sc/338' strongText='Фитнес-программа' tallText='пилатес, йога, МФР и растяжка, функциональные и силовые тренировки с Любовью Шамановой и лучшими тренерами UsmanovaTeam & GymTeam'/>
                <WaitingForYouBox src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/f0efce95fa1865f57039c5e1e91736ea.png/s/500x/a/3187/sc/259' strongText='Методики, давно доказавшие свою эффективность' tallText='адаптированные для беременных тренировки с Любовью Шамановой в формате «повторяй за мной» и рекомендации по питанию'/>
                <WaitingForYouBox src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/9c969c8acfbffd889f76ba6dc23c6f23.png/s/500x/a/3187/sc/416' strongText='СОВЕТЫ гинеколога, нутрициолога и психолога' tallText='видео с рекомендациями специалистов'/>
                <WaitingForYouBox src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/5e188745ef3406ddc0b05844b8bd5cad.png/s/500x/a/3187/sc/242' strongText='Бонусные видео Любови Шамановой' tallText='для беременных и планирующих стать мамой'/>
                <WaitingForYouBox src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/8fde93ba95e015ca2d6425405ac33f04.png/s/500x/a/3187/sc/183' strongText='Трекер «Дневник беременности»' tallText='и эксклюзивные методические материалы'/>

            </div>

        </div>
    );
};

export default WaitingForYou;