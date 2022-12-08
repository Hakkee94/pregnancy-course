import React from 'react';
import BeautyBoxStyle from './BeautyBoxStyle.css'

const BeautyBox = (props) => {
    return (
        <div className='beauty-box'>
            <div className='beauty-box-image'>
                <img src={props.src}/>
            </div>

            <div className='beauty-box-content'>
                <h2><strong>{props.strongText}</strong> {props.tallText}</h2>
            </div>
        </div>
    );
};

export default BeautyBox;