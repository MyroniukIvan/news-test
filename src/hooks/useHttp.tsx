import {useCallback, useState} from "react";


export const useHttp: () => { request: (url: (RequestInfo | URL), method?: string, body?: any, headers?: { "Content-Type": string }) => Promise<any>; clearError: () => void; loading: boolean; error: unknown } = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url: RequestInfo | URL, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        setLoading(true);

        try {
            const res = await fetch(url, {method, body, headers});

            if (!res.ok) {
                throw new Error(`Couldn\`t fetch ${url}, status: ${res.status}`);
            }
            setLoading(false)
            return await res.json();
        } catch (e) {
            setLoading(false)
            const {message}: any = e;
            setError(message);
            throw e;
        }
    }, [])

    const clearError = useCallback(() => {
        setError(null)
    }, [])
    return {
        loading, request, error, clearError
    }
}