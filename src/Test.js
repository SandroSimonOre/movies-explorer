import  { API_KEY } from './config';
import { useState, useRef, useCallback } from 'react';
import useFetch from './hooks/useFetch';
//import Card from './components/Card';
import './Test.scss';

const Test = () => {

    const [ pageNumber, setPageNumber ] = useState(1);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`;
    //const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
    
    const { data, loading, totalPages } = useFetch(url);
    const movies = data;
    const observer = useRef();
    const lastItemRef = useCallback(item => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver( entries => {
            if (entries[0].isIntersecting && pageNumber <= totalPages) {
                setPageNumber(previous => previous + 1)
            }
        })

        if (item) observer.current.observe(item);

    }, [loading, pageNumber, totalPages]);

    return (
        <div className='Test'>
            
            <div className='container'>
            
                {
                    movies && movies.map((movie, index , array ) => {

                        if (array.length === index + 1) {
                            
                            return <div ref={lastItemRef} key={movie.id} className='card'>
                                        <img src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} alt="" />
                                    </div>
                        
                        } else {
                            return <div key={movie.id} className='card'>
                                        <img src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} alt="" />
                                    </div>
                        }
                        
                    })
                }

            </div>

            {loading && <p className='loader'>Loading...</p>}
            
        
        </div>
                            
)
    
}

export default Test;
