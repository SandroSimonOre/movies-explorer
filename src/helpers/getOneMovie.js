import axios from 'axios';
import { API_KEY } from '../config';

const getOneMovie = async (movieId) => {

    const instance = axios.create();

    instance.defaults.baseURL = "https://api.themoviedb.org/3";

    const response = await instance.get('/movie/' + movieId, {
        params: { api_key: API_KEY }
    });
            
    const { id, title, overview, poster_path, genres } = response.data;
    //console.log(id, title)
    return {id, title, overview, poster_path, genres};
            
}

export default getOneMovie;