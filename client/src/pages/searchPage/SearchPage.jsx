import React, { useState } from 'react'
import rstyle from './searchPage.module.css';
import uLogo from './../../media/user.png';
import UserItem from '../../components/userItem/UserItem';
const SearchPage = (props) => {
    const [nickname, setNickname] = useState(null);
    let foundUsers;
    const handleClick = () => {
        props.getUser(nickname);
    }
    if (props.foundUser !== null) {

        foundUsers = props.foundUser.map(user => {
            return (<UserItem nickname={user.nickname} img={user.img} key={user.id} />)
        })
    }
    return (
        <div className={rstyle.searchPage}>
            <div className={rstyle.searchBlock}>
                <input type="text" name="usersName" placeholder='write a users name' value={nickname} onChange={(e) => { setNickname(e.target.value) }} />
                <button onClick={handleClick}>search</button>
            </div>
            <div className={rstyle.foundItems}>
                {foundUsers ? foundUsers : ''}
            </div>
        </div>
    )
}

export default SearchPage