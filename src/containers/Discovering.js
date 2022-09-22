import { useState, useRef, useEffect } from 'react';
import axios from "axios";
import  { API_KEY } from '../config';

import {Card} from '../components/Card';
//import './CardsContainer.scss';

export const Discovering = () => {
    const [loading, setLoading] = useState(true);
    const [allMovies, setAllMovies] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [lastElement, setLastElement] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    
    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setPageNum( previous => previous + 1);
                }
            })
    );

    const getData = async () => {
        setLoading(true);
        let response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNum}`
        );
        setAllMovies( allMovies.concat(response.data.results) );
        
        setTotalPages(4);
        setLoading(false);
    };

    useEffect(() => {
        if (pageNum <= totalPages) {
            getData();
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

    
    return (
        
            <>
                
                <div id='cards-container' className='cards-container'>
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
                                    key={movie.id}
                                    basePath='https://image.tmdb.org/t/p/w300/'
                                />
                            );
                        })}
                </div>
                {loading && <div className='loader'>loading...</div>}
                {pageNum - 1 === totalPages && ( <div className='no-more'>--- This is the end of the list ---</div>)}

            </>
        
    );
};