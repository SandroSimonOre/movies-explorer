import { useState, useEffect } from "react";
import axios from "axios";
import  { API_KEY } from './../config';

const useFetch = pageNumber => {

    //const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //const [totalPages, setTotalPages] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    
    
    useEffect(()=> {
        console.log('useEffect en useFetch...');
        //setLoading(true);
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`;
    
        (async () => {
            
            const response = await axios.get(url);
            setData(previousData => previousData.concat(response.data.results));
            if (response.data.totalPages === pageNumber) setHasMore(false);
        
        })();
            
        //setLoading(false);

    }, [pageNumber])
    
    return {data, hasMore};

}

export default useFetch;