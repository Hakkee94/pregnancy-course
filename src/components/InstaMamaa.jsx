import React from 'react';
import './InstaMama.css'
import InstaMamaImage from "./InstaMamaImage";
import ImageSlider from "./ImageSlider";
import firstImage from '../assets/slider1/1.png'
import secondImage from '../assets/slider1/2.png'
import thirdImage from '../assets/slider1/3.png'
import fourthImage from '../assets/slider1/4.png'
import fifthImage from '../assets/slider1/3.png'
import sixthImage from '../assets/slider1/6.png'
import seventhImage from '../assets/slider1/7.png'
import eighthImage from '../assets/slider1/8.png'
import {useEffect, useState} from "react";


const InstaMamaa = () => {

    const slides = [
        {url: firstImage, title: '1'},
        {url: secondImage, title: '2'},
        {url: thirdImage, title: '3'},
        {url: fourthImage, title: '4'},
        {url: fifthImage, title: '5'},
        {url: sixthImage, title: '6'},
        {url: seventhImage, title: '7'},
        {url: eighthImage, title: '8'},
    ]



    const [height, setHeight] = useState(800)
    useEffect(() => {
        setHeight(window.innerWidth)
    }, [])

    const containerStyles = {
        height: height - 40 + 'px',
        // height: '350px',
        margin: '0 auto',
    }


    return (
        <div className='instamama'>
            <div className='instamama-text'>
                <h1 className='instamama-font'>инстамама</h1>
                <span>+20 кг за время первой беременности. Пришла в форму за 100 дней!</span>
            </div>


            <div className='instamama-images'>
                <InstaMamaImage src={firstImage}/>
                <InstaMamaImage src={secondImage}/>
                <InstaMamaImage src={thirdImage}/>
                <InstaMamaImage src={fourthImage}/>
                <InstaMamaImage src={fifthImage}/>
                <InstaMamaImage src={sixthImage}/>
                <InstaMamaImage src={seventhImage}/>
                <InstaMamaImage src={eighthImage}/>
            </div>

            <div className='first-slider' style={containerStyles}>
                <ImageSlider slides={slides}/>
            </div>

        </div>
    );
};

export default InstaMamaa;