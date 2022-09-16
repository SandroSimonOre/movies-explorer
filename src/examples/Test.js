import { useState, useRef, useEffect } from 'react';
import axios from "axios";
import  { API_KEY } from '../config';

import Card from '../components/Card';
import './Test.scss';

const Test = () => {
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
        //let all = new Set([...allMovies, ...response.data.results]);
        //let all = [...allMovies, ...response.data.results];
        
        setAllMovies( allMovies.concat(response.data.results) );
        //if ( totalPages === 1 ) setTotalPages(response.data.total_pages);
        
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
            //observer.current.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
                //observer.current.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    
    return (
        <div className='Test'>
            <div className='container'>
                <h1>All movies</h1>

                <div className='movies-grid'>
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

            </div>
        </div>
    );
};

export default Test;