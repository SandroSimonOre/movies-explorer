import './Card.scss';
//import placeHolder from './Card.jpg';

export const Card = ({ movie, basePath, handleClick, children }) => {
    
    if (movie.poster_path === null) return;

    return(
        <>
            <div className='card' data-movie-id={movie.id} onClick={handleClick}>
                <img src={basePath + movie.poster_path} alt={movie.title} />
                {children}
            </div>
            
        </>
    )
}