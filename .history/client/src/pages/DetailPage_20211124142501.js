import { useState } from "react";
import { useParams } from "react-router";

export const DetailPage = () => {
    const [link,setLink] = useState(null);
    const linkId = useParams().id;
    const getLink = useCall

    return (
        <div>DetailPage</div>
    )
}