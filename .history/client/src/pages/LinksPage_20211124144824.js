import {useState,useCallback,useContext} from 'react';
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

export const LinksPage = () => {
    const [links,setLinks] = useState([]);
    const [request,loading] = useHttp();
    const {token} = useContext(AuthContext);
    const fetchLinks = useCallback(async()=>{
        tryc
    })

    return (
        <div>Linkspage</div>
    )
}