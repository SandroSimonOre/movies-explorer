import  { API_KEY } from './config';
import { useState, useRef, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import Card from './components/Card';
import './Test.scss';

const Test = () => {

    const [ pageNumber, setPageNumber ] = useState(1);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`;
    
    const { data, totalPages } = useFetch(url);
    const movies = data;

    const loaderRef = useRef();

    useEffect( ()=> {
        const observer = new IntersectionObserver(
            entries => {
                const [entry] = entries;
                if (entry.isIntersecting && pageNumber <= totalPages) {
                    setPageNumber(previous => previous + 1);
                    console.log('Showing loader...');
                }
            },
            {root: null, rootMargin: '0px', threshold: 0.8}
        );

        if (loaderRef.current) observer.observe(loaderRef.current);

        return ()=> {

            if (loaderRef.current) observer.unobserve(loaderRef.current);
        }

    }, [loaderRef, pageNumber, totalPages]);

    return (
        <div className='Test'>
            
            <div className='container'>

                <div className='movies-grid'>

                    {
                        movies && movies.map((movie) => {
                            return <Card key={movie.id}
                                        movie={movie}
                                        basePath='https://image.tmdb.org/t/p/w300/'
                                    /> 
                        
                        })
                    }

                </div>
                
            <div ref={loaderRef} className='loader'>
                <h2>Loading movies...</h2>
            </div>
                

            </div>
            
            
        </div>
                            
    )
    
}

export default Test;