/*
import {API_KEY} from '../apiKey';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetCategories = () => {
    const [categories, setCategories] = useState(null);

    useEffect(()=> {

        (async ()=>{
            const response = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
            //console.log(response)
            setCategories(response.data.genres);
        })();

    },[]);

    return categories;
}

export default useGetCategories;
*/

import * as data from '../sampleData/genres.json'

const useGetCategories = () => {

    return data.default.genres;
}

export default useGetCategories;
