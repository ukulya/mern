import { useState } from "react";
import { useParams } from "react-router";

export const DetailPage = () => {
    const [link,setLink] = useState(null);
    const linkId = useParams().id;
    const 

    return (
        <div>DetailPage</div>
    )
}