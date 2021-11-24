import {useState,useCallback,useContext} from 'react';
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useEffect } from 'react';

export const LinksPage = () => {
    const [links,setLinks] = useState([]);
    const [request,loading] = useHttp();
    const {token} = useContext(AuthContext);
    const fetchLinks = useCallback(async()=>{
        try {
            const fetched = await request('/api/link','GEt',null,{
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch (e) {
            
        }
    },[token,request])

    useEffect(()=>{
        fetchLinks()
    },[])

    return (
        <div>Linkspage</div>
    )
}