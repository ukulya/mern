export const AuthPage = () => {
    return (
        <div className="row">
            <div className="col-lg-6">
                <h1>Сократи ссылку</h1>
                <div className="card p-3">
                    <div className="card-content">
                        <div className="card-title">Авторизация</div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="control-label">Введите почту</label>
                            <input type="email" placeholder="Введите почту" id="email" name="password" className="form-control"/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="control-label">Введите пароль</label>
                            <input type="password" placeholder="Введите пароль" id="password" name="password" className="form-control"/>
                        </div>
                    </div>
                    <div className="card-acion">
                        <button className="btn btn-primary me-3">Войти</button>
                        <button className="btn btn-secondary">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}