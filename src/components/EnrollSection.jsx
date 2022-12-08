import React from 'react';
import EnrollSectionStyle from './EnrollSectionStyle.css'
import BeautyBox from "./BeautyBox";

const EnrollSection = () => {
    return (
        <div className='enroll-section-container'>
            <div className='enroll-section'>
                <div className='enroll-header'>
                    <div className='enroll'>
                        <h1><h1 style={{color: '#E91776'}}>ЗАПИСЫВАЙТЕСЬ,</h1> ЕСЛИ ВЫ:</h1>
                    </div>
                </div>


                <div className='beauty-box-container'>
                    <BeautyBox
                        src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/41020959ec9361d53339afa2bdd79784.png/s/500x/a/3187/sc/59'
                        strongText='Хотите сохранить красоту тела' tallText='&#133; во время беременности'/>
                    <BeautyBox
                        src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/8cbf01a4fc9fd1953835edc82c9e33e3.png/s/500x/a/3187/sc/300'
                        strongText='Мечтаете быстро вернуть прежнюю форму' tallText='после родов'/>
                    <BeautyBox
                        src='https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/8b6fa227ce4ff9387d4d961feb2674c3.png/s/500x/a/3187/sc/263'
                        strongText='Желаете оставаться привлекательной' tallText='и сексуальной'/>
                    <BeautyBox
                        src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/840fe744a0f3d1b735e6a9ef185c993f.png/s/500x/a/3187/sc/210'
                        strongText='Боитесь проблем с диастазом' tallText='и&nbsp;растяжками'/>
                    <BeautyBox
                        src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/2801e84d0bc347b95b15b630a99a596b.png/s/500x/a/3187/sc/96'
                        strongText='Уже знаете, как много сил и&nbsp;здоровья' tallText='нужно молодой маме'/>
                    <BeautyBox
                        src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/a04aba61ee72e8c9151efd036f30c489.png/s/500x/a/3187/sc/236'
                        strongText='Запутались в чужих советах' tallText='что можно, а что нельзя'/>


                </div>

                <div className='img-arrow'>
                    <img
                        src='https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/23769c56529f9ddeb7a6414e4b25cb62.png/s/s1200x/a/3187/sc/157'/>
                </div>
            </div>
        </div>
    );
};

export default EnrollSection;