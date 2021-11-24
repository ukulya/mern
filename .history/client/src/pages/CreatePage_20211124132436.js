export const CreatePage = () => {
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
            id="li"
            name="email"
            className="form-control"
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};
