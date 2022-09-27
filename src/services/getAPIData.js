import axios from 'axios';
import { API_KEY } from '../config';
import { URL_BASE } from '../config';

export const searchMovies = async (url, otherParams) => {
    
    try {

        const response= await axios({
            url: `${URL_BASE}/${url}`,
            params: { api_key: API_KEY, ...otherParams }
        })

        return response;

    } catch (err) {
        console.log(err);
    }
}