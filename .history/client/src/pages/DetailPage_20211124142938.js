import { useCallback, useContext, useState } from "react";
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
            const data = await request(`/api/link/${linkId}`,'GET',null,{
                Authorization: `Bearer ${}`
            })
        } catch (e) {
            
        }
    },[])

    return (
        <div>DetailPage</div>
    )
}