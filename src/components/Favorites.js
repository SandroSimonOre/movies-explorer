import useGetMovies from "../hooks/useGetMovies";
import  { API_KEY } from '../config';
import axios from "axios";
import Card from "./Card";

const Favorites = () => {

    const movies = useGetMovies();
    
    const handleClick = (e) => {
        //alert(e.currentTarget.dataset.movieId)
        //e.currentTarget.classList.add('hidden')
        /*
        const movieId = e.currentTarget.dataset.movieId;
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
        console.log(url)
        let response;
        (async ()=> {
            response = await axios.get(url);
            console.log(response);
        })();
        */
        //console.log(response)

        //localStorage.setItem(e.currentTarget.dataset.movieId, e.currentTarget.dataset.movieId);
        const movieId = e.currentTarget.dataset.movieId;
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
        console.log(url)
        const res = fetch(url).then((result) => result.json());
        console.log(res)

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
export default Favorites;