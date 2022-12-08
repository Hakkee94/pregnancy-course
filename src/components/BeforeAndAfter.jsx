import React, {useEffect, useState} from 'react';
import BeforeAndAfterStyle from './BeforeAndAfterStyle.css'
import ImageSlider from "./ImageSlider";
import i40 from '../assets/slider2/i40.png'
import i43 from '../assets/slider2/i43.png'
import i47 from '../assets/slider2/i47.png'
import i57 from '../assets/slider2/i57.png'
import i75 from '../assets/slider2/i75.png'
// import i91 from '../../assets/slider2/91.png'
// import i100 from '../../assets/slider2/100.png'
// import i106 from '../../assets/slider2/106.png'


const BeforeAndAfter = () => {

    const slides = [
        {url: i40, title: '1'},
        {url: i43, title: '2'},
        {url: i47, title: '3'},
        {url: i57, title: '4'},
        {url: i75, title: '5'},
        // {url: i91, title: '6'},
        // {url: i100, title: '7'},
        // {url: i106, title: '8'},
    ]

    const [height, setHeight] = useState(800)
    useEffect(() => {
        setHeight(window.innerWidth)
    }, [])

    const containerStyles = {
        height: height - 40 + 'px',
        margin: '0 auto',
    }

    return (
        <div className='before-and-after-container'>
            <div className='main-message'>
                <h1><strong>программы любови шамановой&nbsp;- </strong></h1>
                <h2><strong>это всегда результат, подтвержденный «до и после» учениц</strong></h2>
            </div>

            <div className='results-container'>
                <img src={i43}/>
                <img src={i40}/>
                <img src={i47}/>
                <img src={i57}/>
                <img src={i75}/>
            </div>

            <div className='second-slider' style={containerStyles}>
                <ImageSlider slides={slides}/>
            </div>

            <div className='show-more-btn'>
               <button>Показать еще</button>
            </div>

        </div>
    );
};

export default BeforeAndAfter;