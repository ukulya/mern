export const CreatePage = () => {
    return (
        <div className="row">
            <div className="col-lg-8">
            <div className="form-group mb-3">
                            <label htmlFor="email" className="control-label">Введите почту</label>
                            <input type="email" placeholder="Введите почту" id="email" name="email" className="form-control" onChange={changeHandler}/>
                        </div>
            </div>
        </div>
    )
}