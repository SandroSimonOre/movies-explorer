import {API_KEY} from './apiKey';

export const getMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
    return await data.json();
}