import { useEffect, useState } from "react";
import Card from "./../components/Card";
import Modal from '../components/Modal';
import useModal from "../hooks/useModal";
import { getOneMovie } from "../services/getOneMovie";

const Favorites = () => {

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
                        />
                    })
            }
            </div>
            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
            >   
                <p>{ movie && movie.id }</p>
                <p>{ movie && movie.title }</p>
                <p>{ movie && movie.poster_path }</p>
                <p>{ movie && movie.overview }</p>
                <p>{ movie && movie.release_date }</p>
                <p>{ movie && movie.vote_average }</p>
                
            </Modal>
        </>
    )

}

export default Favorites;