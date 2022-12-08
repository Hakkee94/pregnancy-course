import React from 'react';
import PrepareYourBodyStyle from './PrepareYourBodyStyle.css'

const PrepareYourBody = () => {
    return (
        <div className='prepare-your-body-container'>

            <div className='prepare-body-text'>
                <h1><strong style={{color: '#EA1077'}}>на&nbsp;курсе</strong>&nbsp;<strong>вы&nbsp;подготовите тело к<br/>физическим
                    изменениям:</strong></h1>
            </div>

            <div className='trimester-container'>
                <div className='first-column'>
                    <img
                        src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/8212fb27087f41110a9a21c304488b67.png/s/s1200x/a/3187/sc/453'/>
                    <h1><strong>триместр</strong></h1>
                    <h2>Вы сможете адаптироваться к физиологическим изменениям и подготовиться к повышенным нагрузкам на
                        определённые зоны тела. Также вы уменьшите проявления токсикоза за счёт успокаивающих и
                        расслабляющих
                        дыхательных упражнений.</h2>
                </div>

                <div className='second-column'>
                    <h2><strong>В программе:</strong></h2>
                    <ul>
                        <li>Диафрагмальное дыхание и «дыхание в почки»</li>
                        <li>Повышение мобильности грудной клетки и тазобедренных суставов</li>
                        <li>Улучшение осанки</li>
                        <li>Профилактика болей в спине и плоскостопия</li>
                        <li>Снятие симптомов токсикоза</li>
                    </ul>
                </div>
            </div>

            <div className='trimester-container'>
                <div className='first-column'>
                    <img
                        src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/a27023fde6498187a6af0f45aef01464.png/s/s1200x/a/3187/sc/145'/>
                    <h1><strong>триместр</strong></h1>
                    <h2>Лучший период для тренировок. Вы сможете подготовиться к повышенной нагрузке на позвоночник,
                        включить в работу мышцы, улучшить самочувствие, снять напряжение
                        и предупредить развитие многих осложнений: плоскостопия, диастаза и т. д.</h2>
                </div>

                <div className='second-column'>
                    <h2><strong>В программе:</strong></h2>
                    <ul>
                        <li>Улучшение осанки</li>
                        <li>Работа с мышцами верхнего плечевого пояса и рук</li>
                        <li>Снятие напряжения в области плеч и поясницы</li>
                        <li>Профилактика плоскостопия</li>
                        <li>Повышение мобильности грудной клетки и тазобедренных суставов</li>
                        <li>Улучшение баланса и координации</li>
                    </ul>
                </div>
            </div>

            <div className='trimester-container'>
                <div className='first-column'>
                    <img
                        src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/1bf67dd3ccfc8ba2bd06347d2e63c05f.png/s/s1200x/a/3187/sc/377'/>
                    <h1><strong>триместр</strong></h1>
                    <h2>Вы сможете подготовиться к родам и послеродовому периоду, улучшить своё самочувствие
                        и справиться с болезненными ощущениями в области спины
                    </h2>
                </div>

                <div className='second-column'>
                    <h2><strong>В программе:</strong></h2>
                    <ul>
                        <li>Повышение гибкости</li>
                        <li>Дыхательные практики</li>
                        <li>Снятие напряжения, боли и ощущения дискомфорта</li>
                        <li>Практики для расслабления</li>
                        <li>Подготовка к послеродовому периоду</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default PrepareYourBody;