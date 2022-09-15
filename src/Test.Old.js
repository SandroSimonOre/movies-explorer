import { useState, useRef, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import Card from './components/Card';
import './Test.scss';

const Test = () => {

    const [ pageNumber, setPageNumber ] = useState(1);
    
    const { data, hasMore } = useFetch(pageNumber);
    const movies = data;
    console.log(data.length);
    const loaderRef = useRef();

    useEffect( ()=> {
        console.log('useEffect en Test')
        const observer = new IntersectionObserver(
            entries => {
                const [entry] = entries;
                if (entry.isIntersecting && hasMore) {
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

    }, [pageNumber, hasMore]); // loaderRef
/*
    const handleClick = ()=> {
        setPageNumber(previous => previous + 1)    
    }
*/
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

/*
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

*/