import moment from 'moment';
import React, { useEffect } from 'react'
import rstyle from './header.module.css';

const Header = (props) => {
    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            props.setAuthUserData(JSON.parse(localStorage.getItem("user")));
        }
        //клиент будет слушать с сервера
    }, [])
    return (
        <div className={rstyle.header}>
            <h1>mychatX</h1>
            <div className={rstyle.auth}>
                {props.currentUser
                    ? <><h4>{props.currentUser.nickname}</h4>
                        <button onClick={() => { props.logout() }}>logout</button></>
                    : <button>login</button>
                }

            </div>
            {/* <p><span>{moment(Date.now()).format("DD.MM.YYYY")}</span></p> */}
        </div>
    )
}

export default Header;