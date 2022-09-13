import './Card.scss';

function Card({movie, basePath, handleClick}){

    return(
        <div id='card' className='card' data-movie-id={movie.id} onClick={handleClick}>
            <img src={basePath + movie.poster_path} alt={movie.title} />
        </div>
    )
}

export default Card; 