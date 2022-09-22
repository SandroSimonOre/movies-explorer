import { useState, useEffect } from 'react';
import {Card} from './../components/Card';
import { MovieInfo } from '../components/MovieInfo';
import {Modal} from '../components/Modal';
import useModal from '../hooks/useModal';

//import './Favorites.scss'

export const Favorites = () => {

    const [clickedMovieId, setClickedMovieId] = useState('');
    const [favorites, setFavorites] = useState(null);
    const [isOpen, openModal, closeModal] = useModal();

    useEffect(()=>{
        
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
    },[])
    
    const handleCardClick = (movieId) => {
        
        setClickedMovieId( movieId ) ;
        openModal();

    }

    return (
        <div className='favorites'>
            <div id='cards-container' className='cards-container'>
            {
                favorites &&
                    favorites.map(fav => {
                        return <Card
                                    key={fav.id}
                                    movie={fav}
                                    basePath='https://image.tmdb.org/t/p/w300/'
                                    handleClick={handleCardClick}
                                    withWaterMark={true}
                                />
                               
                    })
            }
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
        </div>
    )
}
