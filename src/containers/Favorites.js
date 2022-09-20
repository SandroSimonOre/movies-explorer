import { useEffect, useState } from "react";
import {Card} from "./../components/Card";
import { MovieInfo } from "../components/MovieInfo";
import {Modal} from '../components/Modal';
import useModal from "../hooks/useModal";
import { getOneMovie } from "../services/getOneMovie";
import { WaterMark } from "../components/WaterMark";

export const Favorites = () => {

    const [movie, setMovie] = useState(null); 
    const [movieId, setMovieId] = useState('');
    const [isOpen, openModal, closeModal] = useModal();

    let favorites = [];
    for (let i = 0; i < localStorage.length; i++) {
        favorites.push( JSON.parse(localStorage.getItem(localStorage.key(i))))
    }

    useEffect(()=> {

        const loadMovie = async ()=> {
            const response = await getOneMovie(movieId); 
            if (response) setMovie(response.data)
        }
        loadMovie();

    },[movieId]);

    const handleClick = (e) => {
        
        setMovieId( e.currentTarget.dataset.movieId);
        openModal();

    }

    return (
        <>
            <div id='cards-container' className='cards-container'>
            {
                favorites.length > 0 &&
                    favorites.map(fav => {
                        return <Card
                                movie={fav}
                                key={fav.id}
                                basePath='https://image.tmdb.org/t/p/w300/'
                                handleClick={handleClick}
                                >
                                    <WaterMark content='CLICK FOR MORE DETAILS'/>
                                </Card>
                        
                    })
            }
            </div>
            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
            >   
                { movie && <MovieInfo movie={movie} 
                                      basePath = 'https://image.tmdb.org/t/p/w300/'
                                      buttonTitle='Remove from favorites'
                            /> }
            </Modal>
        </>
    )

}
