import './CardsContainer.scss';
import Card from './Card';
import useGetMovies from '../hooks/useGetMovies';

const CardsContainer = (props) => {
    
    const movies = useGetMovies();
    return(
        <>
            
            <div className='cards-container'>
                
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