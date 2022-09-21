import { WaterMark } from "./WaterMark"; // Refactorize, this should be part of the Card component.

import './Card.scss';
//import placeHolder from './Card.jpg';

export const Card = ({ movie, basePath, handleClick, withWaterMark }) => {
    
    if (movie.poster_path === null) return;

    return(
        <>
            <div className='card' onClick={() => handleClick(movie.id)}>
                <img src={basePath + movie.poster_path} alt={movie.title} />
                {withWaterMark && <WaterMark text='CLICK FOR DETAILS'/> }
            </div>
            
        </>
    )
}