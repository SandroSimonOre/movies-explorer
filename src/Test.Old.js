import  { API_KEY } from './config';
import { useState, useRef, useEffect, useCallback } from 'react';
import useFetch from './hooks/useFetch';
import './Test.scss';

const Test = () => {
    const [page, setPage] = useState(1);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`;
    //const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
    const {loading, error, data} = useFetch(url);
    const movies = data;
    const loader = useRef(null);

    const handleObserver = useCallback(entries => {
        const target = entries[0];
        if (target.isIntersecting) {
            console.log('isIntersecting');
            setPage(previous => previous + 1);
        }
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            //rootMargin: '20px',
            threshold: 0
        };
        //console.log('useeffect')
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) observer.observe(loader.current);

    }, [handleObserver])

    return (
        
        <div className='Test'>
            
            <div className='container'>
            
                {
                    movies && movies.map(movie => (
                    <div key={movie.id} className='card'>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
                    </div>
                ))}

            </div>
            <div>FINNNNNNNNNNNNNNNN</div>
            {loading && <p className='loader'>Loading...</p>}
            {error && <p>Error!</p>}
            <div ref={loader} className='loader'></div>
        
        </div>
    )
}

export default Test;