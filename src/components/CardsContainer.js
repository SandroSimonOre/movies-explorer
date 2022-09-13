import './CardsContainer.scss';
import Card from './Card';
import useGetMovies from '../hooks/useGetMovies';

const CardsContainer = () => {
    
    const movies = useGetMovies();
    return(
        <>
            
            <div id='cards-container' className='cards-container'>
                
                {   
                    movies && (   
                            
                        movies.map(movie => {
                            return <Card movie={movie} key={movie.id} />
                        })
                    )
                }
                
            </div>
            
        </>
    )
}

export default CardsContainer;