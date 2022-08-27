import { useState } from 'react';
import Modal from './Modal';
import './Card.scss';

function Card(props){

    const [isOpen, setIsOpen] = useState(false);
    
    const { poster_path } = props.movie;
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className='card' onClick={ ()=>handleClick() }>

            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
            <Modal isOpen={isOpen} handleClick={handleClick} test={poster_path} />
        </div>
    )
}

export default Card; 