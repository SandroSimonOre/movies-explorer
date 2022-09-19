import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY } from '../config';

const useGetOneMovie = (movieId) => {

    const [movie, setMovie] = useState({});

    useEffect(() => {
        
        console.log('useEffect en useGetOneMovie')    
        const getMovie = async () => {
        
            const instance = axios.create();
            instance.defaults.baseURL = "https://api.themoviedb.org/3";
            const response = await instance.get('/movie/' + movieId, {
        	    params: { api_key: API_KEY }
            });
            
            const { id, title, overview, poster_path, genres } = response.data;
            setMovie({id, title, overview, poster_path, genres});
        
        }

        getMovie();
    
    }, [])
            
    return movie;
}

export default useGetOneMovie;
