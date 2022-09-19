import './Card.scss';
//import placeHolder from './Card.jpg';

function Card({ movie, basePath, handleClick }){
    
    if (movie.poster_path === null) return;

    return(
        <>
            <div className='card' data-movie-id={movie.id} onClick={handleClick}>
                <img src={basePath + movie.poster_path} alt={movie.title} />
                <span>{movie.title}</span>
            </div>
        </>
    )
}

export default Card; 