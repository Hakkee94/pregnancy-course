import React from 'react';

const WaitingForYouBox = (props) => {
    return (
        <div className='waiting-for-you-box'>
            <div>
                <img src={props.src}/>
            </div>

            <div>
                <h2 style={{paddingBottom: '5px'}}><strong>{props.strongText}</strong></h2>
                <span>{props.tallText}</span>

            </div>
        </div>
    );
};

export default WaitingForYouBox;