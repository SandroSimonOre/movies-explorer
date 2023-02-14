import { useState, useContext } from 'react';
import { Card } from './../components/Card';
import { MoviesGrid } from './MoviesGrid';
import { MovieInfo } from '../components/MovieInfo';
import { Modal } from '../components/Modal';
import { useModal } from '../hooks/useModal';
import { FavoritesContext } from '../store/FavoritesProvider';
import styles from '../styles/Favorites.module.scss'

export const Favorites = () => {

    const [clickedMovieId, setClickedMovieId] = useState('');
    const [isOpen, openModal, closeModal] = useModal();
    const { favorites } = useContext( FavoritesContext )
    
    const handleCardClick = (movieId) => {
        
        setClickedMovieId( movieId ) ;
        openModal();

    }

    return (
        <div className={styles.favorites}>
            <div id='grid-wrapper' className='favorites__grid-wrapper'>
                
                <MoviesGrid>
                {
                    favorites &&
                        favorites.map( favorite => {
                            return <Card
                                key={ favorite.id }
                                movie={ favorite }
                                basePath='https://image.tmdb.org/t/p/w300/'
                                handleClick={ handleCardClick }
                                withWaterMark={ true }
                            />
                                
                        })
                }
                </MoviesGrid>

                
            </div>
            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
            >   
                { clickedMovieId && <MovieInfo
                        movieId={clickedMovieId} 
                        basePath = 'https://image.tmdb.org/t/p/w300/'
                        closeWindow={closeModal}
                    />
                }
            </Modal>
            {
                favorites.length === 0 && 
                    <h3 className={styles.placeholder}>
                        No favorites yet. Go to <span>Discover, </span> 
                        <span>Search</span> or <span>Trending</span> and Click your favorite movies.
                        Then you will see them here.
                    </h3>
            }
        </div>
    )
}