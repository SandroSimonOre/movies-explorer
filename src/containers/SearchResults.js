import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { API_KEY } from "../config";
import axios from 'axios';
import { Empty } from "../components/Empty";
import { Spinner } from "../components/Spinner";


const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search)
    const search = query.get('q');
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {

        const getData = async () => {

            setIsLoading(true);
            const instance = axios.create();
            instance.defaults.baseURL = "https://api.themoviedb.org/3";
            const response = await instance.get('/search/movie' , {
                params: { query: search, api_key: API_KEY, page: page }
            });
            
            setMovies( previousMovies => previousMovies.concat(response.data.results) );
            setHasMore( page < response.data.total_pages);
            setIsLoading(false);
            
        };

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
            endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
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