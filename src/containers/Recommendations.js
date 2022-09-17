import useGetMovies from "../hooks/useGetMovies";
import  { API_KEY } from '../config';
import axios from "axios";
import Card from "./../components/Card";

const Recommendations = () => {
        
    const movies = useGetMovies();

    const handleClick = (e) => {
        
        async function getFavorite() {
            /*
            ** EXAMPLE 1
            const movieId = e.currentTarget.dataset.movieId;
            const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
            const res = await axios.get(url);
            localStorage.setItem(movieId, JSON.stringify(res.data))
            */
            
            /*
            ** EXAMPLE 2
            const movieId = e.currentTarget.dataset.movieId;
            const res = await axios.get('https://api.themoviedb.org/3/movie/' + movieId, {
                params: {api_key: API_KEY},
            });
            localStorage.setItem(movieId, JSON.stringify(res.data))
            */
            
            
            // EXAMPLE 3
            const movieId = e.currentTarget.dataset.movieId;
            const res = await axios.get('https://api.themoviedb.org/3/movie/' + movieId, {
                params: {api_key: API_KEY},
            });
            
            const { id, title, overview, poster_path, genres } = res.data;
            const info = {id, title, overview, poster_path, genres};
            localStorage.setItem(movieId, JSON.stringify(info));
            
            
            /*
            ** EXAMPLE 3
            const movieId = e.currentTarget.dataset.movieId;
            const instance = axios.create();
            instance.defaults.baseURL = "https://api.themoviedb.org/3";
            const res = await instance.get('/movie/' + movieId, {
        	    params: { api_key: API_KEY }
            });
            const {title, overview, poster_path } = res.data;
            const info = {title, overview, poster_path};
            console.log(info);
            */
        }
        getFavorite();
                
    }

    return (
        <>
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
        </>
    )

}
export default Recommendations;