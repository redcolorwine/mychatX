import React, { useState } from 'react'
import rstyle from './userItem.module.css';
import uLogo from './../../media/user.png';

const UserItem = (props) => {
    const { id } = JSON.parse(localStorage.getItem("user"));

    const handleClick = (friend_id) => {
        props.addFriend(friend_id, id);
        props.setResp(props.friendResp);
    }
    return (
        <div className={rstyle.userItem}>
            <div className={rstyle.aboutUser}>
                <img src={props?.img ? props.img : uLogo} alt="userImg" />
                <p>{props.nickname}</p>
            </div>
            <div className={rstyle.uButtons}>
                {props.friend !== 'true' 
                   ? <button className={rstyle.addFriend} onClick={() => handleClick(props.id)}>
                        add a friend
                    </button>
                    : <span>your friend</span>
                }

                <button className={rstyle.writeMessage}>
                    write a message
                </button>
            </div>
        </div>
    )
}

export default UserItem;