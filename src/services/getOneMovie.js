import axios from 'axios';
import { API_KEY } from '../config';
import { URL_BASE } from '../config';

export const getOneMovie = async (movieId) => {

    if (!movieId) return;

    try {

        const response= await axios({
            url: `${URL_BASE}/movie/${movieId}`,
            params: { api_key: API_KEY }
        })

        return response;

    } catch (err) {
        
    }

}