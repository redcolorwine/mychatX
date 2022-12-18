import React from 'react'
import rstyle from './header.module.css';

const Header = () => {
    return (
        <div className={rstyle.header}>
            <h4>Public Chat</h4>
            <div className={rstyle.auth}>
                {props.currentUser
                    ? <><h4>{props.currentUser.nickname}</h4>
                        <button onClick={() => { props.logout() }}>Выйти</button></>
                    : <button>Авторизоваться</button>
                }

            </div>
            <p><span>{moment(Date.now()).format("DD.MM.YYYY")}</span></p>
        </div>
    )
}

export default Header;