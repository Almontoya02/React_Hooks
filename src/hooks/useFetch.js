
import { useEffect, useState, useRef } from 'react';
export const useFetch = (url) => {

    let isMounted = true;
    const [states, setstate] = useState({data:null,loading:true,error:null});

    useEffect(()=>{

        return ()=>{
            isMounted=false;
        }
    },[])

    useEffect(()=>{
        setstate({data:null,loading:true,error:null})
        isMounted &&
        fetch(url)
            .then(resp=> resp.json())
            .then(data=>{
                setstate({
                    loading:false,
                    error:null,
                    data
                })
            })
    },[url])

    return states
}
