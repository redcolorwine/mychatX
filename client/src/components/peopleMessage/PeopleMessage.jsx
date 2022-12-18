import React from 'react'
import rstyle from './peopleMessage.module.css';

const PeopleMessage = (props) => {
    return (
        <div className={rstyle.peopleMessage}>
            <div className={rstyle.peopleInfo}>
                <img src={props.img} alt="" />
                <p>{props.nickname}</p>
            </div>
            <div className={rstyle.peopleMessageItem}>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default PeopleMessage;