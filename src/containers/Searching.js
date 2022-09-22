import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import { useEffect, useState } from "react";

import {Card} from "../components/Card";
import { Empty } from "../components/Empty";
import { Spinner } from "../components/Spinner";
import { MovieInfo } from "../components/MovieInfo";
import {MoviesGrid} from '../containers/MoviesGrid';
import {Searcher} from "../components/Searcher";
import {Modal} from '../components/Modal';
import useModal from "../hooks/useModal";

import './Searching.scss';
import { API_KEY } from "../config";

export const Searching = () => {

    const [searchText, setSearchText] = useState('');
    const [previousSearch, setPreviousSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const [clickedMovieId, setClickedMovieId] = useState('');
    const [isOpen, openModal, closeModal] = useModal();

    const getData = async () => {

        setIsLoading(true);
        const instance = axios.create();
        instance.defaults.baseURL = "https://api.themoviedb.org/3";
        const response = await instance.get('/search/movie' , {
            params: { query: searchText, api_key: API_KEY, page: page }
        });
        
        setMovies( previousMovies => previousMovies.concat(response.data.results) );
        setHasMore( response.data.page < response.data.total_pages);
        setIsLoading(false);
        
    };

    useEffect(() => {
        
        if ((searchText !== previousSearch)) setMovies([]);
        if (searchText) {
            
            getData();
            setPreviousSearch(searchText);
        }
        
    }, [searchText, page]);

    /*
    if (!isLoading && movies.length === 0) {
        return <Empty />;
    };
    */
    
    
    const handleCardClick = movieId => {
    
        setClickedMovieId( movieId );
        openModal();

    }
    
    return (
        <div className='searching'>
            
            <div className='searcher-container'>
                <Searcher setSearchText={setSearchText}/>
            </div>
            
            {!isLoading && movies.length === 0
                ?
                    <Empty />
                :
                    <div id='grid-wrapper' className='grid-wrapper'>
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
                                                key={movie.id}
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