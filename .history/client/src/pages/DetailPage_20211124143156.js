import { useCallback, useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
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

    useEffect()

    return (
        <div>DetailPage</div>
    )
}