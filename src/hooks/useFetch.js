import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(url) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const sendRequest = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);
            
            const res = await axios.get(url);    
            
            setData(previousData => previousData.concat(res.data.results));
            setLoading(false);
        
        } catch (err) {
        
            setError(err);
        
        }

    }, [url]);

    useEffect(() => {
    
        sendRequest(url);
    
    }, [sendRequest, url]);

    return {loading, error, data}
}

export default useFetch;