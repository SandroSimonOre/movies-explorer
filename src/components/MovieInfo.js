import { useState, useEffect, useContext } from 'react';
import { getOneMovie } from "../services/getOneMovie";
import { FavoritesContext } from '../store/FavoritesProvider';
import styles from '../styles/MovieInfo.module.scss';

export const MovieInfo = ({movieId, basePath, closeWindow}) => {
    
    const [movie, setMovie] = useState(null); 
    const {addFavorite, removeFavorite, isFavorite} = useContext(FavoritesContext)
    
    const handleButtonClick = () => {
        
        if (isFavorite(movie.id)) {
            removeFavorite(movie.id)
        } else {
            addFavorite(movie)
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

    return movie && <div className={styles.movieInfo}>
                <div className = {styles.movieInfoContainer}>

                    <div className={styles.posterContainer}>
                        <img src={basePath + movie.poster_path} alt='' />
                        
                    </div>
                    <div className={styles.detailContainer}>
                        <div>
                            <h4>{movie.title && movie.title}</h4>
                            <p className={styles.overview}>{movie.overview && movie.overview}</p>
                            <p><span>Release date:</span>  {movie.release_date && movie.release_date}</p>
                            <p><span>Genres:</span> {movie.genres && movie.genres.map(e => e.name).join(', ') }</p>
                            <p><span>Rating:</span> {movie.vote_average && movie.vote_average}</p>
                        </div>
                        <button className={isFavorite(movie.id) ? styles.removeButton : ''} onClick={handleButtonClick}>
                            {isFavorite(movie.id) ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES' }
                        </button>
                    </div>
                    
                </div>
            
            </div>
}