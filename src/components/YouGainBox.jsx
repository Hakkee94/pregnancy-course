import React from 'react';

const YouGainBox = (props) => {
    return (
        <div className='you-gain-box'>
            <h1>{props.number}</h1>
            <h2><strong>{props.strongText}</strong>{props.tallText}</h2>
        </div>
    );
};

export default YouGainBox;