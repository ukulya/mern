import { useCallback, useState } from "react";
import { useParams } from "react-router";

export const DetailPage = () => {
    const [link,setLink] = useState(null);
    const linkId = useParams().id;
    const getLink = useCallback(() => {
        tryca
    },[])

    return (
        <div>DetailPage</div>
    )
}