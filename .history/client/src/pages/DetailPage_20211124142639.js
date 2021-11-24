import { useCallback, useState } from "react";
import { useParams } from "react-router";

export const DetailPage = () => {
    const [link,setLink] = useState(null);
    const [request,loading] = useH;
    const linkId = useParams().id;
    const getLink = useCallback(() => {
        try {
            
        } catch (e) {
            
        }
    },[])

    return (
        <div>DetailPage</div>
    )
}