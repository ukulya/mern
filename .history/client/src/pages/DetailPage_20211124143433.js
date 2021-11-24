import { useCallback, useContext, useState,useEffect } from "react";
import { useParams } from "react-router";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

export const DetailPage = () => {
    const [link,setLink] = useState(null);
    const {token} = useContext(AuthContext);
    const [request,loading] = useHttp();
    const linkId = useParams().id;
    const getLink = useCallback(() => {
        try {
            const fetched = await request(`/api/link/${linkId}`,'GET',null,{
                Authorization: `Bearer ${token}`
            })

            setLink(fetched)
        } catch (e) {
            
        }
    },[token,linkId,request])

    useEffect(() => {
        getLink()
    },[getLink])

    if(loading) return <Loader/>

    return (
        <>
        {if(!loading && link )}
        <div>DetailPage</div>
        </>
    )
}