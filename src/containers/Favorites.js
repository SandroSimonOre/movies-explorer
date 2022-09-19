import { useEffect, useState } from "react";
import Card from "./../components/Card";
import Modal from '../components/Modal';
import useModal from "../hooks/useModal";
//import useGetOneMovie from "../hooks/useGetOneMovie";
import getOneMovie from "../helpers/getOneMovie";

const Favorites = () => {
    //const [movie, setMovie] = useState(null);
    const [movie, setMovie] = useState(null); 
    const [idMovie, setIdMovie] = useState(null);
    const [isOpen, openModal, closeModal] = useModal();

    let favorites = [];
    for (let i = 0; i < localStorage.length; i++) {
        favorites.push( JSON.parse(localStorage.getItem(localStorage.key(i))))
    }

    useEffect(()=> {
        //console.log('ejecutando useEffect...')
        setMovie(getOneMovie(idMovie));
        //console.log('peli',movie)
    },[idMovie]);

    const handleClick = (e) => {
        //alert(e.currentTarget.tagName)
        setIdMovie( e.currentTarget.dataset.movieId);
        openModal();
    }
    //console.log(cajon)
    //setMovie(movieId );
    //const movie = getOneMovie(movieId);
    //console.log('moive', movie) 
    
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
                
                <h1>Soy un modal</h1>
                <p>{ movie && movie.id }</p>
                
            </Modal>
        </>
    )

}

export default Favorites;