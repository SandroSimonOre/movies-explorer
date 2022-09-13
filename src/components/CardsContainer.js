//import { useState } from 'react';
//import Modal from './Modal';


import './CardsContainer.scss';
import Card from './Card';
import useGetMovies from '../hooks/useGetMovies';

const CardsContainer = () => {
    
    const movies = useGetMovies();

    const handleClick = (e) => {
        //alert(e.target.nodeName)
        alert(e.currentTarget.dataset.movieId)
    }
    return(
        <>
            
            <div id='cards-container' className='cards-container'>
                
                {   
                    movies && (   
                            
                        movies.map(movie => {
                            return <Card key={movie.id}
                                        movie={movie}
                                        basePath='https://image.tmdb.org/t/p/w300/'
                                        handleClick={handleClick}
                                    />
                        })
                    )
                }
                
            </div>
            
        </>
    )
}

export default CardsContainer;

// TODO:
    //const [isOpen, setIsOpen] = useState(false);
    
    //const { poster_path } = props.movie;
    
    //const handleClick = () => {
    //    setIsOpen(!isOpen)
    //}
    //<Modal isOpen={isOpen} handleClick={handleClick} movie={props.movie} />
    //onClick={ ()=>handleClick()}
    //https://image.tmdb.org/t/p/w300/${poster_path
    // TODO:
    // ESTO SE VE MUY MAL, EL MODAL NO DEBERIA IR JUNTO CON LA IMAGEN. QUIZA 
    // LO PODAMOS COLOCAR EN EL CardContainer
