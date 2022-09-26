import { useState, useEffect } from 'react';

import { getOneMovie } from "../services/getOneMovie";
import './MovieInfo.scss';

export const MovieInfo = ({movieId, basePath, closeWindow}) => {
    
    const [movie, setMovie] = useState(null); 
    const isFavorite = localStorage.getItem(movieId);

    const handleButtonClick = () => {
        if (isFavorite) {
            localStorage.removeItem(movieId)
        } else {
            const movieWithDate = {...movie, timeStamp: Date.now()};
            localStorage.setItem(movieId, JSON.stringify(movieWithDate));
        }
        closeWindow();
    }

    useEffect(()=> {
        setMovie(null);
        const loadMovie = async ()=> {
            
            const response = await getOneMovie(movieId); 
            if (response) setMovie(response.data)
        }
        loadMovie();

    },[movieId]);

    return movie && <div className='movie-info'>
                <div className = 'movie-info-container'>

                    <div className='poster-container'>
                        <img src={basePath + movie.poster_path} alt='' />
                        
                    </div>
                    <div className='detail-container'>
                        <div>
                            <h4>{movie.title && movie.title}</h4>
                            <p className='overview'>{movie.overview && movie.overview}</p>
                            <p><span>Release date:</span>  {movie.release_date && movie.release_date}</p>
                            <p><span>Genres:</span> {movie.genres && movie.genres.map(e => e.name).join(', ') }</p>
                            <p><span>Rating:</span> {movie.vote_average && movie.vote_average}</p>
                        </div>
                        <button className={isFavorite && 'remove-button'} onClick={handleButtonClick}>
                            {isFavorite ? 'REMOVE FROM FAVORITES':'ADD TO FAVORITES' }
                        </button>
                    </div>
                    
                </div>
            
            </div>
}