import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";

export const CreatePage = () => {

    const history = useHistory()
    const {request} = useHttp();

  const [link,setLink] = useState('');

    const pressHandler = async(event) => {
        if(event.key === 'Enter'){
            try {
                const data = await request('/api/link/generate','POST',{from:link},{
                    Authorizaiton: `Bearer ${auth.token}`;
                })
                console.log(data);
                history.push(`/detail/${data.link._id}`)

            } catch (e) {
                
            }
        }
    }

  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="form-group mb-3">
          <label htmlFor="link" className="control-label">
            Вставьте ссылку
          </label>
          <input
            type="email"
            placeholder=" Вставьте ссылку"
            id="link"
            value={link}
            className="form-control"
            onChange={e => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
        </div>
      </div>
    </div>
  );
};
