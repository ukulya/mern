import { useState } from "react";
import { useHttp } from "../hooks/http.hook";

export const CreatePage = () => {
    const {request} = useHttp();

  const [link,setLink] = useState('');

    const pressHandler = (event) => {
        if(event.key === 'Enter'){
            try {
                
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
