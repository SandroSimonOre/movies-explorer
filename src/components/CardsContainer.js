import './CardsContainer.css';
import Card from './Card';
import useGetMovies from '../hooks/useGetMovies';

const CardsContainer = (props) => {
    const {title} = props;
    const movies = useGetMovies();
    return(
        <>
            <h1>{title}</h1>
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