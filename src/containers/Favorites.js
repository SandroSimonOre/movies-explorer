import { useState, useEffect, useContext } from 'react';
import { Card } from './../components/Card';
import { MoviesGrid } from './MoviesGrid';
import { MovieInfo } from '../components/MovieInfo';
import { Modal } from '../components/Modal';
import { useModal } from '../hooks/useModal';
import { FavoritesProvider } from '../context/FavoritesContext';
import './Favorites.scss'

export const Favorites = () => {

    const [clickedMovieId, setClickedMovieId] = useState('');
    // const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')));
    const [isOpen, openModal, closeModal] = useModal();
    //const favorites = useContext( FavoritesProvider.c )
    /*useEffect(()=>{
        
        
        const loadFavorites = ()=> {
            let tempArray = [];
            for (let i = 0; i < localStorage.length; i++) {
                tempArray.push( JSON.parse(localStorage.getItem(localStorage.key(i))));
            };
            if (tempArray) {
                tempArray.sort((a, b) => b.timeStamp - a.timeStamp);
                setFavorites(tempArray);
            }
        }
        loadFavorites();
    },[])*/

    useEffect( ()=> {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
    
    const handleCardClick = (movieId) => {
        
        setClickedMovieId( movieId ) ;
        openModal();

    }

    return (
        <div className='favorites'>
            <div id='grid-wrapper' className='grid-wrapper'>
                
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
                    <h3 className='placeholder'>
                        No favorites yet. Go to <span>Discover, </span> 
                        <span>Search</span> or <span>Trending</span> and Click your favorite movies.
                        Then you will see them here.
                    </h3>
            }
        </div>
    )
}
