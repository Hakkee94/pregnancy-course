import React, {useState} from 'react';

const QuestionsAndAnswers = ({list}) => {
    const [expandedList, setExpandedList] = useState([])
    return (
        <div>
            {
                list.map((item, key) => <div onClick={() => setExpandedList(prev => {
                    if (prev.includes(key)) {
                        return prev.filter(f => f !== key)
                    } else {
                        return [...prev, key]
                    }
                })} className='question-item'>
                    <div className='question-container'><a
                    >{item.question} </a> <span>+</span>
                    </div>
                    <span className='answer'
                          style={{display: expandedList.includes(key) ? 'flex' : 'none'}}>{item.answer}
                </span>
                </div>)
            }
        </div>

    );
};

export default QuestionsAndAnswers;