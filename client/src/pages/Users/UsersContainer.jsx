import React from 'react'
import { connect } from 'react-redux'
import { addFriendThunk, setAuthUserData, setFoundUserThunk, setFriendsAndUsers, setFriendsThunk, setUsersThunk } from '../../redux/usersReducer'
import Users from './Users'


let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        friends: state.users.friends,
        currentUser: state.users.currentUser,
        isFriendsLoading: state.users.isFriendsLoading,
        friendResp: state.users.friendResp
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getAll: (user_id) => {
            dispatch(setFriendsAndUsers(user_id));
        },
        addFriend: (friend_id, user_id) => {
            dispatch(addFriendThunk(friend_id, user_id));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;