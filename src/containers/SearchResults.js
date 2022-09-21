import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import { useEffect, useState } from "react";

import {Card} from "../components/Card";
import { Empty } from "../components/Empty";
import { Spinner } from "../components/Spinner";
import { MovieInfo } from "../components/MovieInfo";
import {Searcher} from "../components/Searcher";
import {Modal} from '../components/Modal';
import useModal from "../hooks/useModal";

import './SearchResults.scss';

import { API_KEY } from "../config";

export const SearchResults = () => {

    const [query] = useSearchParams();
    const search = query.get('query');
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
            params: { query: search, api_key: API_KEY, page: page }
        });
        
        setMovies( previousMovies => previousMovies.concat(response.data.results) );
        setHasMore( response.data.page < response.data.total_pages);
        setIsLoading(false);
        
    };

    useEffect(() => {

        if (search) getData();

    }, [search, page]);

    if (!isLoading && movies.length === 0) {
        return <Empty />;
    };

    
    const handleCardClick = (movieId) => {
    
        setClickedMovieId( movieId ) ;
        openModal();

    }
    
    return (
        <>
            <Searcher />
        
            <InfiniteScroll
                dataLength={movies.length}
                hasMore={hasMore}
                next={() => setPage( prevPage => prevPage + 1 )}
                loader={<Spinner />}
                scrollableTarget='main'
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>No more movies to show :-(</b>
                    </p>
                }
            >
                <div id='cards-container' className='cards-container'>
                    {movies.length > 0 &&
                        movies.map((movie) => {
                            return (
                                <Card
                                    movie={movie}
                                    key={movie.id}
                                    basePath='https://image.tmdb.org/t/p/w300/'
                                    handleClick={handleCardClick}
                                    withWaterMark={true}
                                />
                                
                            );
                        })}
                </div>
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
                
            </InfiniteScroll>
        </>
    )
}