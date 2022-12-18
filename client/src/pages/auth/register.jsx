import React, { useEffect, useState } from 'react'
import rstyle from './auth.module.css';
import moment from 'moment/moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterPage = (props) => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (nickname !== '' && password !== '' && age !== '') {
            props.register(nickname, password, age);
            console.log(props.authResponse);
        } else {
            toast.error("Нужно заполнить все поля!", {
                position: "bottom-right",
                autoClose: 8000,
                pauseOnHover:true,
                draggable:true,
                theme:"dark",
            })
        }
    }

    return (
        <div className={rstyle.authPage}>
        
            <div className={rstyle.header}>
                <h4>РЕГИСТРАЦИЯ</h4>
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
                    <label htmlFor="age">Возраст</label>
                    <input type="text" name="age" value={age} onChange={(e) => {
                        setAge(e.target.value);
                    }} />
                    <button onClick={handleClick}>Регистрация</button>
                    <p>Если есть аккаунт, то <a href="/login">Авторизуйтесь</a></p>
                    <ToastContainer/>
                </form>
            </div>

        </div>
    )


}

export default RegisterPage;