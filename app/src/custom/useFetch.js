import { useState, useEffect } from "react";

export function useFetch(url, body = null){
    const [data, setData] = useState([]);

    useEffect(() => {
        if(!body){
            fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
        }else{
            fetch(url, 
                {
                    method: 'POST',
                    body: body
                })
            .then(res => res.json())
            .then(data => setData(data))
        }
    }, [])

    return data 
}