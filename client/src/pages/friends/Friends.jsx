import React, { useEffect, useState } from 'react'
import rstyle from './friends.module.css';
import uLogo from './../../media/user.png';
import UserItem from '../../components/userItem/UserItem';
const Friends = (props) => {
    const [nickname, setNickname] = useState(null);
    let foundUsers;
    let friends;
    
    useEffect(() => {
        const { id } = JSON.parse(localStorage.getItem("user"));
        props.getAll(id);
    }, [])


    if (props.isFriendsLoading) {
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

            friends = props.users.map(user => {
                if (friendsIds.includes(user.id))
                    return (<UserItem nickname={user.nickname} img={user.img} key={user.id} friend='true' />)
            })
        }
        return (
            <div className={rstyle.friends}>
                <div className={rstyle.foundItems}>
                    {/* {foundUsers ? foundUsers : ''} */}
                    {friends ? friends : ''}
                </div>
            </div>
        )
    }

}

export default Friends;