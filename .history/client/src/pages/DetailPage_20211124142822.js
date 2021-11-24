import { useCallback, useState } from "react";
import { useParams } from "react-router";
import { useHttp } from "../hooks/http.hook";

export const DetailPage = () => {
    const [link,setLink] = useState(null);
    const [request,loading] = useHttp();
    const linkId = useParams().id;
    const getLink = useCallback(() => {
        try {
            const data = await request(`/api/link/${linkId}`,'GET'.null)
        } catch (e) {
            
        }
    },[])

    return (
        <div>DetailPage</div>
    )
}