/*import {API_KEY} from '../apiKey';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetMovies = () => {
    const [movies, setMovies] = useState(null);

    useEffect(()=> {

        (async ()=>{
            const response = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
            setMovies(response.data.results);
        })();

    },[]);

    return movies;
}

export default useGetMovies;

*/

// Lo hago para no hacer solicitudes a cada momento al API, temo que me baneen.

import * as data from '../sampleData/trendingMovies.json'

const useGetMovies = () => {

    return data.default.results;
}

export default useGetMovies;
