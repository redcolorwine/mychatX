import React, { useEffect, useRef, useState } from 'react'
import rstyle from './auth.module.css';
import moment from 'moment/moment';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = (props) => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
   
    const history = useNavigate();
   
    if (props.isAuth) {
        return <Navigate to={"/"} />
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        if (nickname !== '' && password !== '') {
            props.login(nickname, password);

        } else {
            toast.error("Нужно заполнить все поля!", {
                position: "bottom-right",
                autoClose: 8000,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
        }
    }

    return (
        <div className={rstyle.authPage}>
            <div className={rstyle.header}>
                <h4>АВТОРИЗАЦИЯ</h4>

                <p><span>{moment(Date.now()).format("DD.MM.YYYY")}</span></p>
            </div>
            <div className={rstyle.authWindow}>
                <form>
                    <label htmlFor="nickname">Имя пользователя</label>
                    <input type="text" name="nickname" value={nickname} onChange={(e) => {
                        setNickname(e.target.value);
                    }} />
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                    <button onClick={handleClick}>Вход</button>
                    {props.loginError
                        && <div className={rstyle.error}><p>Ошибка!<br></br> <span>{props.loginError}</span></p></div>
                    }
                    <p>Если нет аккаунта, то <a href="/register">Зарегистрируйтесь</a></p>
                    <ToastContainer />
                </form>
            </div>

        </div>
    )


}

export default LoginPage;