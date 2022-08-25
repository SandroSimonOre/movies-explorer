import './CardsContainer.css';
import Card from './Card.js';
import useGetMovies from '../hooks/useGetMovies';
const CardsContainer = () => {

    const movies = useGetMovies();
    //console.log(movies)
    return(
        <div className='cards-container'>
            
            {   
                movies ?
                    (   
                        
                        movies.map(movie => {
                            return <Card movie={movie} key={movie.id} />
                        })
                    ) : null
            }
            
        </div>
    )
}

export default CardsContainer;