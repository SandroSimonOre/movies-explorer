import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = url => {

    //const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    
    useEffect(()=> {
        console.log('useEffect en useFetch...');
        //setLoading(true);
           
        (async () => {
            
            const response = await axios.get(url);
            setData(previousData => previousData.concat(response.data.results));
            setTotalPages(response.data.total_pages);
        
        })();
            
        //setLoading(false);

    }, [url])
    
    return {data, totalPages};

}

export default useFetch;