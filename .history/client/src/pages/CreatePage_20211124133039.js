import { useState } from "react";

export const CreatePage = () => {

  const [link,setLink] = useState('');

    const pressHandler = (event) => {
        if(event.key === 'Enter'){
            try
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
