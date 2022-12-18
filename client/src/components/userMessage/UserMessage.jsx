import React from 'react'
import rstyle from './userMessage.module.css';

const UserMessage = (props) => {
    return (
        <div className={rstyle.userMessage}>
            <div className={rstyle.userInfo}>
                <img src={props.img} alt="" />
                <p>{props.nickname}</p>
            </div>
            <div className={rstyle.userMessageItem}>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default UserMessage;