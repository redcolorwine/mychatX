import React, { useEffect, useState } from 'react'
import rstyle from './users.module.css';
import uLogo from './../../media/user.png';
import UserItem from '../../components/userItem/UserItem';
const Users = (props) => {
    const [nickname, setNickname] = useState(null);
    let foundUsers;
    let friends;
    const { id } = JSON.parse(localStorage.getItem("user"));
    const [resp, setResp] = useState('');
    useEffect(() => {
        props.getAll(id);
    }, [resp])


    if (!props.users) {
        return (
            <div className={rstyle.friends}>
                <div className={rstyle.foundItems}>
                    <h4>ЗАГРУЗКА</h4>
                </div>
            </div>
        )
    } else {
        if (props.friends !== null) {
            let friendsIds = props.friends.map(friend => {
                return friend.friend_id;
            })

            foundUsers = props.users.map(user => {
                if (friendsIds.includes(user.id)) {
                    return (<UserItem nickname={user.nickname} img={user.img} key={user.id} id={user.id} friend='true' resp={props.friendResp} setResp={setResp} />)
                } else if (!friendsIds.includes(user.id) && user.id != id) {
                    return (<UserItem nickname={user.nickname} img={user.img} key={user.id} id={user.id} friend='false' addFriend={props.addFriend} resp={props.friendResp} setResp={setResp} />)
                }
            })
        }
        return (
            <div className={rstyle.friends}>
                <div className={rstyle.foundItems}>
                    {foundUsers ? foundUsers : ''}

                </div>
            </div>
        )
    }

}

export default Users;