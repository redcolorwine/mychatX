import React, { useEffect, useState } from 'react'
import rstyle from './errorPage.module.css';
import moment from 'moment/moment';


const ErrorPage = (props) => {

    return (
        <div className={rstyle.errorPage}>
            <div className={rstyle.header}>
                <h4>ERROR PAGE</h4>

                <p><span>{moment(Date.now()).format("DD.MM.YYYY")}</span></p>
            </div>
            <div className={rstyle.chatWindow}>
                <h1>ОШИБКА</h1>
                <h4>Вы не можете присоединиться к чату, пока Вы не авторизованы</h4>
                <div className={rstyle.auth}>
                     <button>Авторизоваться</button>
                </div>
            </div>

        </div>
    )


}

export default ErrorPage;