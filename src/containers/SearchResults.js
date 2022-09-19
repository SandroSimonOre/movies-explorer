//import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

import { API_KEY } from "../config";

import Card from "../components/Card";
import { Empty } from "../components/Empty";
import { Spinner } from "../components/Spinner";


const SearchResults = () => {
    //const [search, setSearch] = useState();
    //const location = useLocation();
    const [query] = useSearchParams();
    const search = query.get('query');
    //setSearch(query.get('q'))
    //console.log(search)
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

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

        getData();

    }, [search, page]);

    if (!isLoading && movies.length === 0) {
        return <Empty />;
    }

    const handleClick = () => {
        alert('por implementar')
    }

    return (
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
                                handleClick={handleClick}
                            />
                        );
                    })}
            </div>
            
        </InfiniteScroll>
    )
}
export default SearchResults;