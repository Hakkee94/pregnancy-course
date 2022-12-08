import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom'

const modalPortal = document.querySelector('#modal')
const modal = document.createElement('div')

const InstaMamaImage = (props) => {
    const [fullSize, setFullSize] = useState(false)

    useEffect(() => {
        fullSize ? modalPortal.append(modal) : modal.remove()
        return () => {
            modal.remove()
        }
    }, [fullSize])

    return (
            <div
                className='instamama-image'>
                <img onClick={() => setFullSize(true)} style={{backgroundSize: 'cover'}} src={props.src}/>
                {ReactDOM.createPortal(
                    <div onClick={() => setFullSize(false)} style={{display: fullSize ? 'flex' : 'none'}} className='full-size-img-container'>
                        <img onClick={(event) => event.stopPropagation()} src={props.src}/>
                    </div>, modal
                )}

            </div>
    );
};

export default InstaMamaImage;