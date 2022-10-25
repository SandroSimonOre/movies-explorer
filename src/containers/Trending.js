import { useState, useRef, useEffect } from 'react';
import {Card} from '../components/Card';
import { MoviesGrid } from "./MoviesGrid";
import { searchMovies } from "../services/getAPIData";
import { MovieInfo } from "../components/MovieInfo";
import {Modal} from '../components/Modal';
import {useModal} from "../hooks/useModal";
import { v4 as uuidv4 } from 'uuid';

import styles from  './Trending.module.scss';

export const Trending = () => {
    const [loading, setLoading] = useState(true);
    const [allMovies, setAllMovies] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [lastElement, setLastElement] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [clickedMovieId, setClickedMovieId] = useState('');
    const [isOpen, openModal, closeModal] = useModal();
    
    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setPageNum( previous => previous + 1);
                }
            })
    );

    useEffect(() => {
        
        if (pageNum <= totalPages) {
            
            setLoading(true);
            
            const loadData = async () => {
                const response = await searchMovies('trending/movie/day', {page:pageNum});
                setAllMovies( previous => previous.concat(response.data.results) );
                setTotalPages(response.data.total_pages);
            };
            loadData();
            
            setLoading(false);
        
        }
    
    }, [pageNum]);

    useEffect(() => {
        const currentElement = lastElement;
        
        const currentObserver = observer.current;
        

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    const handleCardClick = movieId => {
    
        setClickedMovieId( movieId );
        openModal();

    }

    
    return (
        
            <div  id='trending' className={styles.trending}>
                
                <div id='grip-wrapper'>
                <MoviesGrid>
                    {allMovies.length > 0 &&
                        allMovies.map((movie, index) => {
                            return (index === allMovies.length - 1 &&
                                !loading && pageNum <= totalPages) ? (
                                
                                    <div
                                        key={movie.id}
                                        ref={setLastElement}
                                    >
                                        <Card 
                                            movie={movie}
                                            basePath='https://image.tmdb.org/t/p/w300/'
                                        />
                                    </div>
                                ) : (
                                <Card
                                    movie={movie}
                                    key={uuidv4()}
                                    basePath='https://image.tmdb.org/t/p/w300/'
                                    handleClick={handleCardClick}
                                    withWaterMark={true}
                                />
                            );
                        })}
                </MoviesGrid>
                </div>
                {loading && <div className='loader'>loading...</div>}
                {pageNum - 1 === totalPages && ( <div className='no-more'>--- This is the end of the list ---</div>)}
            
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
        
    );
};