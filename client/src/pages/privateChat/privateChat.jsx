import React, { useEffect, useRef, useState } from 'react'
import rstyle from './privateChat.module.css';
import moment from 'moment/moment';
import Picker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';
import uphoto from './../../media/user.png';
import me from './../../media/1.png';

const PrivateChat = (props) => {


    const [message, setMessage] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [servData, setServData] = useState(null);

    const handleClick = () => {
        alert(1);
    }

    return (
        <div className={rstyle.publicChat}>
            <h4>PRIVATE CHAT</h4>
            <div className={rstyle.chatWindow}>

                <div className={rstyle.addMessage}>


                    <input type="text" placeholder='Сообщение' value={message} onChange={(e) => setMessage(e.target.value)} />

                    <button className={rstyle.submit} onClick={handleClick}><IoMdSend /></button>
                    <div className={rstyle.emoji}>

                    </div>
                </div>
            </div>

        </div>
    )


}

export default PrivateChat;