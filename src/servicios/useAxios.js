import axios from "axios";
import { useState, useEffect } from "react";

export function useAxios(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Bandera por si desmonta el padre
        let mounted = true;
        setLoading(true);
        setError(null);
        
        axios.get(url)
            .then(response => {
                if (mounted) {
                    setData(response.data);
                }
            })
            .catch(err => {
                if (mounted) {
                    setError(err.message || "Error");
                }
            })
            .finally(() => {
                if (mounted) {
                    setLoading(false);
                }
            });
        
        // Hago el Cleanup
        return () => {
            mounted = false;
        }
        
    }, [url]);

    return { data, loading, error };
}
