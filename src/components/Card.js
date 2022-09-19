import './Card.scss';
import placeHolder from './Card.jpg';

function Card({ movie, basePath, handleClick }){
    
    // if (!movie.poster_path) return;

    return(
        <>
            {
                movie.poster_path ?
                    <div className='card' data-movie-id={movie.id} onClick={handleClick}>
                        <img src={basePath + movie.poster_path} alt={movie.title} />
                
                    </div>
                : 
                    <div className='card placeholder' data-movie-id={movie.id} >
                        <img src={placeHolder} alt={movie.title} />
            
                    </div>
            }
        </>
    )
}

export default Card; 