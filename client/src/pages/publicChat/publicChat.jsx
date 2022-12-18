import React, { useEffect, useRef, useState } from 'react'
import PeopleMessage from '../../components/peopleMessage/PeopleMessage';
import UserMessage from '../../components/userMessage/UserMessage';
import rstyle from './publicChat.module.css';
import moment from 'moment/moment';
import Picker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';
import uphoto from './../../media/user.png';
import me from './../../media/1.png';
import socket from '../../socket/socket';
const PublicChat = (props) => {

    const host = 'http://localhost:8000';
    const [message, setMessage] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [servData, setServData] = useState(null);
    socket.on("connect", () => {

        console.log("user joined");
    });

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });



    useEffect(() => {
        socket.on('new_message', function (data) {
            setServData(data);
        })
        if (localStorage.getItem('user') !== null) {
            props.setAuthUserData(JSON.parse(localStorage.getItem("user")));



        }
        props.getMessages();
        //клиент будет слушать с сервера

    }, [servData])
//[props.resp]
   
    const handleClick = (e) => {
        e.preventDefault();
        // props.addMessage(message, 'any.pang', moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"), props.currentUser.id);
        //Отправка сообщения с клиента
        socket.emit('new_message', { message: message, img: 'any.pang', publication_date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"), user_id: props.currentUser.id });
        setMessage('');
    }

    const handleShowEmoji = () => {
        setShowEmoji(!showEmoji);
    }

    const handleEmojiClick = (event, emoji) => {
        console.log(emoji.emoji);
        let msg = message;
        msg += emoji.emoji;
        setMessage(msg);
    }

    if (props.messages !== null) {
        let messagesFromApi = props.messages.map(item => {
            if (props.currentUser !== null && (item.nickname === props.currentUser.nickname)) {

                return (<UserMessage id={item.id} key={item.id} img={me} nickname={item.nickname} message={item.message} date={item.date} />)
            } else {
                return (<PeopleMessage id={item.id} key={item.id} img={uphoto} nickname={item.nickname} message={item.message} date={item.date} />)

            }
        })

        return (
            <div className={rstyle.publicChat}>
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
                <div className={rstyle.chatWindow}>

                    {messagesFromApi}
                    <div className={rstyle.addMessage}>


                        <input type="text" placeholder='Сообщение' value={message} onChange={(e) => setMessage(e.target.value)} />

                        <button className={rstyle.submit} onClick={handleClick}><IoMdSend /></button>
                        <div className={rstyle.emoji}>
                            <BsEmojiSmileFill onClick={handleShowEmoji} />
                            {
                                showEmoji && <Picker onEmojiClick={handleEmojiClick} />
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    } else {
        return (<div>
            <h1>Загрузка</h1>
        </div>)
    }

}

export default PublicChat;