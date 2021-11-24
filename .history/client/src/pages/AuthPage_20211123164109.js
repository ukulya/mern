export const AuthPage = () => {
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card">
                    <div className="card-content">
                        <div className="card-title">Авторизация</div>
                        <div className="form-group">
                            <label htmlFor="email" className=""></label>
                            <input type="email" placeholder="Введите почту" id="email/>
                        </div>
                    </div>
                    <div className="card-acion">
                        <button className="btn btn-primary">Войти</button>
                        <button className="btn btn-secondary">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}