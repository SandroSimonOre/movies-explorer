import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState, useMemo } from "react";

import { Card } from "../components/Card";
import { Empty } from "../components/Empty";
import { Spinner } from "../components/Spinner";
import { MovieInfo } from "../components/MovieInfo";
import { MoviesGrid } from '../containers/MoviesGrid';
import { Modal } from '../components/Modal';
import { useModal } from "../hooks/useModal";
import { v4 as uuidv4 } from 'uuid';
import { searchMovies } from '../services/getAPIData';
import styles from '../styles/Movies.module.scss';

export const Movies = ({categories, setMode}) => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [clickedMovieId, setClickedMovieId] = useState('');
    const [isOpen, openModal, closeModal] = useModal();
    
    let genres = useMemo( () => {
        return categories.filter( e => e.selected === true).map( e => e.id).join(',');
        
    }, []);

    useEffect(() => {
        
        setIsLoading(true);
        
        const loadData = async ()=> {

            if (genres === '0' ) genres = '';
            const response = await searchMovies('discover/movie', { page: page, with_genres:genres });
            setMovies( previousMovies => previousMovies.concat(response.data.results) );
            setHasMore( response.data.page < response.data.total_pages);

        };
        
        loadData();

        setIsLoading(false);
        
    }, [genres, page]);
    
    const handleCardClick = movieId => {
    
        setClickedMovieId( movieId );
        openModal();

    }

    return (

        <div className={styles.movies}>
        
            <div className={styles.toolsBar}>
                <button className={styles.backButton} onClick={()=> setMode('categories') }>&lt; Back</button>
        
                <div className={styles.categoriesContainer}>
                    <p>Selected categories:</p>
                    {
                        categories.length > 0 && categories.filter(e => e.selected === true).map( e => {
                            return <span key={e.id} className={styles.category}>{e.name}</span>
                        })
                    } 
                </div>
            </div>

            {!isLoading && movies.length === 0
                ?
                    <Empty />
                :
                    <div id='grid-wrapper' className={styles.gridWrapper}>
                        <InfiniteScroll
                            dataLength={movies.length}
                            hasMore={hasMore}
                            next={() => setPage( prevPage => prevPage + 1 )}
                            loader={movies.length > 0 && <Spinner />}
                            scrollableTarget='grid-wrapper'
                        >
                            <MoviesGrid>
                                {movies.length > 0 &&
                                    movies.map(movie => {
                                        return (
                                            <Card
                                                movie={movie}
                                                key={uuidv4()}
                                                basePath='https://image.tmdb.org/t/p/w300/'
                                                handleClick={handleCardClick}
                                                withWaterMark={true}
                                            />
                                            
                                        )
                                    })
                                }
                                
                            </MoviesGrid>
                                
                        </InfiniteScroll>
                    </div> }
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