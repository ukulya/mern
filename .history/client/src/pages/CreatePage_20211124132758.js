import { useState } from "react";

export const CreatePage = () => {

  const [link,setLink] = useState('')
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="form-group mb-3">
          <label htmlFor="email" className="control-label">
            Вставьте ссылку
          </label>
          <input
            type="email"
            placeholder="Введите почту"
            id="link"
            value={link}
            className="form-control"
            onChange={setLink()}
          />
        </div>
      </div>
    </div>
  );
};
