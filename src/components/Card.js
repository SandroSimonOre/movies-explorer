import { WaterMark } from "./WaterMark"; 
import styles from './Card.module.scss';

export const Card = ({ movie, basePath, handleClick, withWaterMark }) => {
    
    if (movie.poster_path === null) return;

    return(
        <>
            <div className={styles.card} onClick={() => handleClick(movie.id)}>
                <img src={basePath + movie.poster_path} alt={movie.title} />
                {withWaterMark && <WaterMark text='CLICK FOR DETAILS'/> }
            </div>
            
        </>
    )
}