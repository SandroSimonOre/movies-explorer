import { useState, useRef, useEffect } from 'react';
import axios from "axios";
import  { API_KEY } from './config';

import Card from './components/Card';
import './Test.scss';

const TOTAL_PAGES = 6;
const Test = () => {
    const [loading, setLoading] = useState(true);
    const [allMovies, setAllMovies] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [lastElement, setLastElement] = useState(null);

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setPageNum( previous => previous + 1);
                }
            })
    );

    const getData = async () => {
        setLoading(true);
        let response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNum}`
        );
        let all = new Set([...allMovies, ...response.data.results]);
        setAllMovies([...all]);
        setLoading(false);
    };

    useEffect(() => {
        if (pageNum <= TOTAL_PAGES) {
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
        <div className='Test'>
        <div className='container'>
            <h1>All movies</h1>

            <div className='movies-grid'>
                {allMovies.length > 0 &&
                    allMovies.map((movie, i) => {
                        return (i === allMovies.length - 1 &&
                            !loading && pageNum <= TOTAL_PAGES) ? (
                            
                                <div
                                    key={`${movie.id}-${i}`}
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
                                key={`${movie.id}-${i}`}
                                basePath='https://image.tmdb.org/t/p/w300/'
                            />
                        );
                    })}
            </div>
            {loading && <div className='loader'>loading...</div>}

            {pageNum - 1 === TOTAL_PAGES && (
                <p>♥</p>
            )}
        </div>
        </div>
    );
};

export default Test;