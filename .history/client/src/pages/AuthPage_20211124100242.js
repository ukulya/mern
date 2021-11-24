import { useState,useEffect } from "react"
import { useHttp } from "../hooks/http.hook"
import { useMessage } from "../hooks/message.hook"

export const AuthPage = () => {
    const message = useMessage()

    const {loading,request,error,clearError} = useHttp();

    const [form, setForm ] = useState({
        email: '',password:''
    })

    useEffect({
        message(error)
        cleaeError()
    },[error,message,clearError])

    console.log(setForm)
    const changeHandler = event => {
        setForm({...form,[event.target.name]:event.target.value})
    }

    const registerHandler = async () => {
        try{

            const data = await request('/api/auth/register','POST',{...form})
            console.log('Data',data);

        } catch(e){

        }
    }

    return (
        <div className="row">
            <div className="col-lg-6">
                <h1>Сократи ссылку</h1>
                <div className="card p-3">
                    <div className="card-content">
                        <div className="card-title">Авторизация</div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="control-label">Введите почту</label>
                            <input type="email" placeholder="Введите почту" id="email" name="email" className="form-control" onChange={changeHandler}/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="control-label">Введите пароль</label>
                            <input type="password" placeholder="Введите пароль" id="password" name="password" className="form-control" onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className="card-acion">
                        <button className="btn btn-primary me-3">Войти</button>
                        <button className="btn btn-secondary" onClick={registerHandler}>Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}