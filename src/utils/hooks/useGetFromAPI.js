import { useEffect, useState } from "react";

export function useGetFromAPI(url, options) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url, options);
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch(error) {
                setLoading(false);
                setError(error);
            }
        }
        fetchData();
    },[url, options]);

    return [ data, loading, error ];
}